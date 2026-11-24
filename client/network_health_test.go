package main

import (
	"encoding/json"
	"errors"
	"net/http"
	"net/http/httptest"
	"strings"
	"sync/atomic"
	"testing"
)

type networkRoundTripper func(*http.Request) (*http.Response, error)

func (f networkRoundTripper) RoundTrip(r *http.Request) (*http.Response, error) {
	return f(r)
}

func TestProbeNetworkTarget(t *testing.T) {
	server := httptest.NewServer(http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		switch r.URL.Path {
		case "/api":
			if r.Method != http.MethodGet {
				t.Errorf("API method = %s", r.Method)
			}
			w.WriteHeader(http.StatusOK)
		case "/cdn":
			if r.Method != http.MethodHead {
				t.Errorf("CDN method = %s", r.Method)
			}
			w.WriteHeader(http.StatusForbidden)
		case "/redirect":
			http.Redirect(w, r, "/api", http.StatusFound)
		case "/api-denied":
			w.WriteHeader(http.StatusForbidden)
		default:
			w.WriteHeader(http.StatusServiceUnavailable)
		}
	}))
	defer server.Close()
	for _, tt := range []struct {
		path, status string
		api          bool
	}{
		{"/api", "reachable", true},
		{"/cdn", "reachable", false},
		{"/redirect", "reachable", false},
		{"/api-denied", "failed", true},
		{"/unavailable", "failed", false},
	} {
		result := probeNetworkTarget(server.Client(), networkTarget{URL: server.URL + tt.path, API: tt.api})
		if result.Status != tt.status {
			t.Errorf("%s API=%v: got %s (%s), want %s", tt.path, tt.api, result.Status, result.Detail, tt.status)
		}
	}
}

func TestNetworkIssue(t *testing.T) {
	result := func(group, status string) networkResult {
		return networkResult{Group: group, Status: status, Checked: true}
	}
	for _, tt := range []struct {
		name    string
		results []networkResult
		issue   bool
	}{
		{"healthy", []networkResult{result("api", "reachable"), result("thumbnails", "reachable"), result("downloads", "reachable")}, false},
		{"api", []networkResult{result("api", "failed")}, true},
		{"thumbnails", []networkResult{result("thumbnails", "failed")}, true},
		{"one mirror", []networkResult{result("downloads", "failed"), result("downloads", "reachable")}, false},
		{"all mirrors", []networkResult{result("downloads", "failed"), result("downloads", "failed")}, true},
		{"optional", []networkResult{result("optional", "failed")}, false},
		{"unchecked", []networkResult{{Group: "downloads"}, result("downloads", "failed")}, false},
	} {
		t.Run(tt.name, func(t *testing.T) {
			if got := networkIssue(tt.results) != ""; got != tt.issue {
				t.Errorf("issue = %v, want %v", got, tt.issue)
			}
		})
	}
}

func TestNetworkMonitorRetriesAndRecovers(t *testing.T) {
	var calls atomic.Int32
	client := &http.Client{Transport: networkRoundTripper(func(*http.Request) (*http.Response, error) {
		if calls.Add(1) <= 2 {
			return nil, errors.New("connection failed")
		}
		return &http.Response{StatusCode: http.StatusOK, Body: http.NoBody, Header: make(http.Header)}, nil
	})}
	monitor := &networkMonitor{}
	targets := []networkTarget{{Name: "API", URL: "https://example.test", Group: "api", API: true}}
	monitor.check(client, targets)
	if got := monitor.get(); got.Issue == "" || calls.Load() != 2 {
		t.Fatalf("first check: issue = %q, calls = %d", got.Issue, calls.Load())
	}
	monitor.check(client, targets)
	if got := monitor.get(); got.Issue != "" || got.Results[0].Status != "reachable" || calls.Load() != 3 {
		t.Fatalf("recovery: %+v, calls = %d", got, calls.Load())
	}
}

func TestNetworkMonitorDoesNotReportTransientFailure(t *testing.T) {
	var calls atomic.Int32
	client := &http.Client{Transport: networkRoundTripper(func(*http.Request) (*http.Response, error) {
		if calls.Add(1) == 1 {
			return nil, errors.New("temporary connection failure")
		}
		return &http.Response{StatusCode: http.StatusOK, Body: http.NoBody, Header: make(http.Header)}, nil
	})}
	monitor := &networkMonitor{}
	monitor.check(client, []networkTarget{{URL: "https://example.test", Group: "api", API: true}})
	if got := monitor.get(); got.Issue != "" || got.Results[0].Status != "reachable" || calls.Load() != 2 {
		t.Fatalf("transient failure: %+v, calls = %d", got, calls.Load())
	}
}

func TestNetworkHealthHandler(t *testing.T) {
	rr := httptest.NewRecorder()
	networkHealthHandler(rr, httptest.NewRequest(http.MethodGet, "/network/health", nil))
	var snapshot networkSnapshot
	if err := json.Unmarshal(rr.Body.Bytes(), &snapshot); err != nil {
		t.Fatal(err)
	}
	if rr.Code != http.StatusOK || !strings.Contains(rr.Header().Get("Content-Type"), "application/json") {
		t.Fatalf("status = %d, content type = %s", rr.Code, rr.Header().Get("Content-Type"))
	}
	rr = httptest.NewRecorder()
	networkHealthHandler(rr, httptest.NewRequest(http.MethodPost, "/network/health", nil))
	if rr.Code != http.StatusMethodNotAllowed {
		t.Fatalf("POST status = %d", rr.Code)
	}
}
