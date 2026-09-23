package http

import (
	"strings"

	"github.com/gofiber/fiber/v3"
	"github.com/gofiber/fiber/v3/middleware/proxy"
)

func Proxying(prefix string, addrs []string) fiber.Handler {
	// return proxy.BalancerForward(addrs)
	return proxy.Balancer(proxy.Config{
		Servers: addrs,
		ModifyRequest: func(c fiber.Ctx) error {
			c.Path(strings.Replace(c.OriginalURL(), prefix, "", 1))
			c.Request().Header.Add("X-Real-IP", c.IP())
			// log.Println(c.Host()+c.OriginalURL(), "->", addrs[0]+c.Path())
			return nil
		},
		ModifyResponse: func(c fiber.Ctx) error {
			c.Response().Header.Del(fiber.HeaderServer)
			return nil
		},
	})
}
