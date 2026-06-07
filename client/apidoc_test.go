package main

import (
	"os"
	"regexp"
	"sort"
	"testing"

	"github.com/blenderkit/blenderkit/client/internal/apispec"
)

// bareRouteRe matches `mux.HandleFunc("/path", handlerName)` registrations that
// use a plain string literal path (i.e. the unversioned routes). The path class
// excludes '+' so it does not match the `"/"+vapi+"..."` versioned form.
var bareRouteRe = regexp.MustCompile(`mux\.HandleFunc\("(/[^"+]*)",\s*(\w+)\)`)

// versionedRouteRe matches `mux.HandleFunc("/"+vapi+"/path", handlerName)`
// registrations (the versioned routes).
var versionedRouteRe = regexp.MustCompile(`mux\.HandleFunc\("/"\+vapi\+"(/[^"]*)",\s*(\w+)\)`)

type registration struct {
	handler   string
	versioned bool
}

// parseMainRoutes extracts the route registrations from main.go so the test can
// verify that the apispec registry matches the real server routes.
func parseMainRoutes(t *testing.T) map[string]registration {
	t.Helper()
	src, err := os.ReadFile("main.go")
	if err != nil {
		t.Fatalf("reading main.go: %v", err)
	}

	routes := map[string]registration{}
	for _, m := range bareRouteRe.FindAllStringSubmatch(string(src), -1) {
		path, handler := m[1], m[2]
		reg := routes[path]
		reg.handler = handler
		routes[path] = reg
	}
	for _, m := range versionedRouteRe.FindAllStringSubmatch(string(src), -1) {
		path, handler := m[1], m[2]
		reg := routes[path]
		reg.handler = handler
		reg.versioned = true
		routes[path] = reg
	}
	return routes
}

// TestAPISpecMatchesRoutes guarantees the apispec registry is the single source
// of truth for the documented API: every documented route exists in main.go with
// the same handler and versioning, and every route in main.go is documented.
func TestAPISpecMatchesRoutes(t *testing.T) {
	actual := parseMainRoutes(t)

	documented := map[string]bool{}
	for _, r := range apispec.Routes() {
		documented[r.Path] = true

		reg, ok := actual[r.Path]
		if !ok {
			t.Errorf("documented route %q is not registered in main.go", r.Path)
			continue
		}
		if reg.handler != r.Handler {
			t.Errorf("route %q: apispec handler %q != main.go handler %q", r.Path, r.Handler, reg.handler)
		}
		if reg.versioned != r.Versioned {
			t.Errorf("route %q: apispec Versioned=%v != main.go versioned=%v", r.Path, r.Versioned, reg.versioned)
		}
	}

	var undocumented []string
	for path := range actual {
		if !documented[path] {
			undocumented = append(undocumented, path)
		}
	}
	sort.Strings(undocumented)
	for _, path := range undocumented {
		t.Errorf("route %q is registered in main.go but missing from apispec.Routes(); add it (run `go generate ./...` afterwards)", path)
	}
}

// TestAPISpecTagsAreKnown ensures every route uses a tag declared in apispec.Tags
// so it appears in the generated documentation.
func TestAPISpecTagsAreKnown(t *testing.T) {
	known := map[string]bool{}
	for _, tag := range apispec.Tags {
		known[tag] = true
	}
	for _, r := range apispec.Routes() {
		if !known[r.Tag] {
			t.Errorf("route %q uses unknown tag %q (add it to apispec.Tags)", r.Path, r.Tag)
		}
	}
}
