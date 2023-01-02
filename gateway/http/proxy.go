package http

import (
	"strings"

	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/proxy"
)

func Proxying(prefix string, addrs []string) fiber.Handler {
	return proxy.Balancer(proxy.Config{
		Servers: addrs,
		ModifyRequest: func(c *fiber.Ctx) error {
			c.Path(strings.Replace(c.OriginalURL(), prefix, "", 1))
			c.Request().Header.Add("X-Real-IP", c.IP())
			return nil
		},
		ModifyResponse: func(c *fiber.Ctx) error {
			c.Response().Header.Del(fiber.HeaderServer)
			return nil
		},
	})
}
