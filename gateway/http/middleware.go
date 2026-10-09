package http

import (
	"log"
	"strconv"
	"strings"

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
func NewAuth(addrs []string, postfix string) fiber.Handler {
	return proxy.Balancer(proxy.Config{
		Servers: addrs,
		ModifyRequest: func(c fiber.Ctx) error {
			c.Path(postfix + c.Path())
			log.Println("[Auth:Req]", c.Method(), c.Host()+c.OriginalURL(), "->", addrs[0]+c.Path())
			return nil
		},
		ModifyResponse: func(c fiber.Ctx) error {
			if c.Response().StatusCode() > 399 {
				return nil
			}
			c.Path(strings.Replace(c.Path(), postfix, "", 1))
			// log.Println("[Auth:Res]", c.Method(), c.Host()+c.OriginalURL(), "->", addrs[0]+c.Path())
			return c.Next()
		},
	})
}
func NewNotFound() fiber.Handler {
	return func(c fiber.Ctx) error {
		log.Println("Unhandled", c.Method(), c.Host()+c.OriginalURL())
		c.Response().Header.Del(fiber.HeaderServer)
		return c.SendStatus(fiber.StatusNotFound)
	}
}
