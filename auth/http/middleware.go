package http

import (
	"log"

	"github.com/gofiber/fiber/v2"
)

func NewLog() fiber.Handler {
	i := 1
	return func(c *fiber.Ctx) error {
		log.Println(i, c.Method(), c.Hostname(), c.OriginalURL())
		i++
		return c.Next()
	}
}
