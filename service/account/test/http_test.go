package main

import (
	"testing"

	"github.com/gofiber/fiber/v2"
)

func TestHttp(t *testing.T) {
	a := fiber.Get("http://localhost:3100")
	if err := a.Parse(); err != nil {
		panic(err)
	}
	code, body, errs := a.String()
	t.Log("[code]", code)
	t.Log("[body]", body)
	for _, err := range errs {
		t.Error("[err]", err)
	}
}
func BenchmarkHttp(b *testing.B) {
	for i := 0; i < b.N; i++ {
		a := fiber.Get("http://localhost:3200")
		a.Set("Authorization", "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhY2NvdW50X2lkIjoiNjNhNjA2MzcxMDFkZmVmMTIyMzA5ZDhiIiwiYWNjb3VudF90eXBlIjoiY3VzdG9tZXIiLCJleHAiOjE2NzE5MTEzNTEsIm5iZiI6MTY3MTgyNDk1MSwiaWF0IjoxNjcxODI0OTUxfQ.hu5QkgpH3qBauywgqiCgN2buKcxJQYj6IB1zAJ6GeS4")
		if err := a.Parse(); err != nil {
			panic(err)
		}
		a.String()
	}
}
func BenchmarkProxyHttp(b *testing.B) {
	for i := 0; i < b.N; i++ {
		a := fiber.Get("http://localhost:3000/account")
		a.Set("Authorization", "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhY2NvdW50X2lkIjoiNjNhNjA2MzcxMDFkZmVmMTIyMzA5ZDhiIiwiYWNjb3VudF90eXBlIjoiY3VzdG9tZXIiLCJleHAiOjE2NzE5MTEzNTEsIm5iZiI6MTY3MTgyNDk1MSwiaWF0IjoxNjcxODI0OTUxfQ.hu5QkgpH3qBauywgqiCgN2buKcxJQYj6IB1zAJ6GeS4")
		if err := a.Parse(); err != nil {
			panic(err)
		}
		a.String()
	}
}
