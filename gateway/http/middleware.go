package http

import (
	"log"

	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/proxy"
)

func NewLog() fiber.Handler {
	i := 1
	return func(c *fiber.Ctx) error {
		rm := c.Request().Header.Method()
		rh := c.Request().Header.Host()
		ro := c.Request().Header.RequestURI()
		defer func() {
			log.Println(i, string(rm), string(rh), string(ro), "->", c.Method(), c.Hostname(), c.OriginalURL())
			i++
		}()
		return c.Next()
	}
}
func NewAuth(addrs []string) fiber.Handler {
	return proxy.Balancer(proxy.Config{
		Servers: addrs,
		ModifyRequest: func(c *fiber.Ctx) error {
			return nil
		},
		ModifyResponse: func(c *fiber.Ctx) error {
			if c.Response().StatusCode() > 399 {
				return nil
			}
			return c.Next()
		},
	})
}
