package main

import (
	"encoding/json"
	"testing"
)

func TestSearchVariantFieldsSurviveClientRoundTrip(t *testing.T) {
	input := []byte(`{"count":1,"results":[{"id":"parent","structure":"variant_parent","variants":[{"id":"free","assetBaseId":"free-base","isDefault":true,"isFree":true,"basePrice":null,"dictParameters":{"blenderVersionMin":"4.2.3"},"files":[{"fileType":"zip_file","downloadUrl":"https://example.com/free.zip"}]}]}]}`)
	var search SearchResults
	if err := json.Unmarshal(input, &search); err != nil {
		t.Fatal(err)
	}
	output, err := json.Marshal(search)
	if err != nil {
		t.Fatal(err)
	}
	var decoded map[string]interface{}
	if err := json.Unmarshal(output, &decoded); err != nil {
		t.Fatal(err)
	}
	parent := decoded["results"].([]interface{})[0].(map[string]interface{})
	if parent["structure"] != "variant_parent" {
		t.Fatalf("parent structure lost: %s", output)
	}
	variants, ok := parent["variants"].([]interface{})
	if !ok || len(variants) != 1 {
		t.Fatalf("nested variants lost: %s", output)
	}
	variant := variants[0].(map[string]interface{})
	if variant["id"] != "free" || variant["isDefault"] != true || variant["basePrice"] != nil {
		t.Fatalf("variant identity/default/nullable price changed: %s", output)
	}
	if _, exists := variant["canDownload"]; exists {
		t.Fatal("missing variant permission must not become an explicit false")
	}
	if variant["dictParameters"].(map[string]interface{})["blenderVersionMin"] != "4.2.3" {
		t.Fatalf("variant compatibility lost: %s", output)
	}
	if variant["files"].([]interface{})[0].(map[string]interface{})["fileType"] != "zip_file" {
		t.Fatalf("variant ZIP lost: %s", output)
	}
}
