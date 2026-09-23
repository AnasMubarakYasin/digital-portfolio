package http

import (
	"log"
	"strconv"

	"github.com/gofiber/fiber/v3"
	"github.com/gofiber/fiber/v3/middleware/proxy"
)

func NewLog() fiber.Handler {
	i := 1
	return func(c fiber.Ctx) error {
		rh := c.RequestCtx().RemoteAddr().String()
		// rh := c.Request().Host()
		rm := c.Request().Header.Method()
		ro := c.Request().Header.RequestURI()

		err := c.Next()

		defer func() {
			log.Println("["+strconv.Itoa(i)+"]"+string(rm)+"|"+string(rh)+string(ro), "->", c.Response().RemoteAddr().String()+c.OriginalURL())
			// log.Println(i, string(rm), string(rh), string(ro), "->", c.Method(), c.Hostname(), c.OriginalURL())
			i++
		}()
		return err
	}
}
func NewAuth(addrs []string) fiber.Handler {
	return proxy.Balancer(proxy.Config{
		Servers: addrs,
		ModifyRequest: func(c fiber.Ctx) error {
			return nil
		},
		ModifyResponse: func(c fiber.Ctx) error {
			if c.Response().StatusCode() > 399 {
				return nil
			}
			return c.Next()
		},
	})
}
