package main

import (
	"encoding/json"
	"fmt"
	"net/http"
	"net/url"
	"sync"
	"time"
)

type networkTarget struct {
	Name  string
	URL   string
	Group string
	API   bool
}

type networkResult struct {
	Name    string `json:"name"`
	Host    string `json:"host"`
	Group   string `json:"group"`
	Status  string `json:"status"`
	Detail  string `json:"detail"`
	Checked bool   `json:"checked"`
}

type networkSnapshot struct {
	Results   []networkResult `json:"results"`
	CheckedAt time.Time       `json:"checkedAt"`
	Issue     string          `json:"issue"`
}

type networkMonitor struct {
	mu       sync.RWMutex
	snapshot networkSnapshot
}

var clientNetworkHealth = &networkMonitor{}

// Keep the mirror and thumbnail hosts in sync with the server's DOWNLOAD_STORAGES
// and STORAGES["thumbnails"]. Download URLs themselves are supplied by the API.
func networkTargets(server string) []networkTarget {
	return []networkTarget{
		{Name: "API server", URL: server, Group: "api", API: true},
		{Name: "Thumbnails and avatars", URL: "https://public.blenderkit.com/", Group: "thumbnails"},
		{Name: "Primary downloads", URL: "https://assets.blendkit.com/", Group: "downloads"},
		{Name: "Download fallback", URL: "https://assets.blenderkit.com/", Group: "downloads"},
		{Name: "CloudFront fallback (if offered)", URL: "https://d255qm5a95hvrp.cloudfront.net/", Group: "downloads"},
		{Name: "Legacy plugin website", URL: "https://www.blenderkit.com/", Group: "optional"},
		{Name: "Gravatar avatars", URL: "https://www.gravatar.com/", Group: "optional"},
	}
}

func (m *networkMonitor) get() networkSnapshot {
	m.mu.RLock()
	defer m.mu.RUnlock()
	snapshot := m.snapshot
	snapshot.Results = append([]networkResult(nil), snapshot.Results...)
	return snapshot
}

func (m *networkMonitor) set(snapshot networkSnapshot) {
	m.mu.Lock()
	m.snapshot = snapshot
	m.mu.Unlock()
}

func probeNetworkTarget(client *http.Client, target networkTarget) networkResult {
	result := networkResult{Name: target.Name, Group: target.Group, Checked: true}
	parsed, err := url.Parse(target.URL)
	if err != nil || parsed.Host == "" || (parsed.Scheme != "https" && parsed.Scheme != "http") {
		result.Host, result.Status, result.Detail = "Invalid server URL", "failed", "Invalid HTTP(S) URL"
		return result
	}
	result.Host = parsed.Host
	method := http.MethodHead
	if target.API {
		method = http.MethodGet
	}
	req, err := http.NewRequest(method, target.URL, nil)
	if err != nil {
		result.Status, result.Detail = "failed", "Could not create request"
		return result
	}
	probeClient := *client
	probeClient.Timeout = 10 * time.Second
	if !target.API {
		probeClient.CheckRedirect = func(*http.Request, []*http.Request) error { return http.ErrUseLastResponse }
	}
	resp, err := probeClient.Do(req)
	if err != nil {
		result.Status, result.Detail = "failed", fmt.Sprintf("Connection failed: %v", safeDownloadError(err))
		return result
	}
	defer resp.Body.Close()
	if (target.API && resp.StatusCode != http.StatusOK) || (!target.API && resp.StatusCode >= 500) {
		result.Status, result.Detail = "failed", fmt.Sprintf("HTTP %d", resp.StatusCode)
		return result
	}
	result.Status = "reachable"
	if target.API {
		result.Detail = fmt.Sprintf("HTTP %d", resp.StatusCode)
	} else {
		result.Detail = fmt.Sprintf("HTTP %d; content access not verified", resp.StatusCode)
	}
	return result
}

func networkIssue(results []networkResult) string {
	var apiFailed, thumbnailsFailed bool
	mirrors, failedMirrors := 0, 0
	for _, result := range results {
		switch result.Group {
		case "api":
			apiFailed = result.Checked && result.Status == "failed"
		case "thumbnails":
			thumbnailsFailed = result.Checked && result.Status == "failed"
		case "downloads":
			mirrors++
			if result.Checked && result.Status == "failed" {
				failedMirrors++
			}
		}
	}
	switch {
	case apiFailed:
		return "API server check failed"
	case thumbnailsFailed:
		return "Thumbnail host check failed"
	case mirrors > 0 && failedMirrors == mirrors:
		return "Download host checks failed"
	default:
		return ""
	}
}

func (m *networkMonitor) check(client *http.Client, targets []networkTarget) {
	results := make([]networkResult, len(targets))
	var wg sync.WaitGroup
	for i, target := range targets {
		wg.Add(1)
		go func(i int, target networkTarget) {
			defer wg.Done()
			result := probeNetworkTarget(client, target)
			if result.Status == "failed" {
				time.Sleep(2 * time.Second)
				result = probeNetworkTarget(client, target)
			}
			results[i] = result
		}(i, target)
	}
	wg.Wait()
	snapshot := networkSnapshot{Results: results, CheckedAt: time.Now(), Issue: networkIssue(results)}
	m.set(snapshot)
	if snapshot.Issue != "" {
		BKLog.Printf("%s Network check: %s", EmoWarning, snapshot.Issue)
	}
}

func (m *networkMonitor) run(client *http.Client, server string) {
	targets := networkTargets(server)
	m.check(client, targets)
	ticker := time.NewTicker(time.Hour)
	defer ticker.Stop()
	for range ticker.C {
		m.check(client, targets)
	}
}

func networkHealthHandler(w http.ResponseWriter, r *http.Request) {
	if r.Method != http.MethodGet {
		http.Error(w, "Method not allowed", http.StatusMethodNotAllowed)
		return
	}
	w.Header().Set("Content-Type", "application/json")
	w.Header().Set("Cache-Control", "no-store")
	if err := json.NewEncoder(w).Encode(clientNetworkHealth.get()); err != nil {
		BKLog.Printf("%s Could not write network health: %v", EmoWarning, err)
	}
}
