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
			ip := c.IP()
			c.Request().Header.Del("X-Real-IP")
			c.Request().Header.Add("X-Real-IP", ip)
			c.Path(strings.Replace(c.Path(), prefix, "", 1))
			// log.Println(c.Method(), c.Host()+c.OriginalURL(), "->", addrs[0]+c.Path())
			return nil
		},
		ModifyResponse: func(c fiber.Ctx) error {
			c.Response().Header.Del(fiber.HeaderServer)
			return nil
		},
	})
}
