package http

import (
	"github.com/gofiber/fiber/v3"
	"github.com/gofiber/fiber/v3/middleware/proxy"
)

type Web struct {
	Proxy fiber.Handler
}

func NewWeb(addrs []string) *Web {
	handler := proxy.Balancer(proxy.Config{Servers: addrs})
	return &Web{Proxy: handler}
}
