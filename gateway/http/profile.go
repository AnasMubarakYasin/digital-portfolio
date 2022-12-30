package http

import (
	"strings"

	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/proxy"
)

type Profile struct {
	Proxy fiber.Handler
}

func NewProfile(addrs []string) *Profile {
	handler := proxy.Balancer(proxy.Config{
		Servers: addrs,
		ModifyRequest: func(c *fiber.Ctx) error {
			c.Path(strings.Replace(c.OriginalURL(), "/profile", "", 1))
			c.Request().Header.Add("X-Real-IP", c.IP())
			return nil
		},
		ModifyResponse: func(c *fiber.Ctx) error {
			c.Response().Header.Del(fiber.HeaderServer)
			return nil
		},
	})
	return &Profile{Proxy: handler}
}
