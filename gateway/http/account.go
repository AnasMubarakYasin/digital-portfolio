package http

import (
	"strings"

	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/proxy"
)

type Account struct {
	Proxy fiber.Handler
}

func NewAccount(addrs []string) *Account {
	handler := proxy.Balancer(proxy.Config{
		Servers: addrs,
		ModifyRequest: func(c *fiber.Ctx) error {
			c.Path(strings.Replace(c.OriginalURL(), "/account", "", 1))
			c.Request().Header.Add("X-Real-IP", c.IP())
			return nil
		},
		ModifyResponse: func(c *fiber.Ctx) error {
			c.Response().Header.Del(fiber.HeaderServer)
			return nil
		},
	})
	return &Account{Proxy: handler}
}
