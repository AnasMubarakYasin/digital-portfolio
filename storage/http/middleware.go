package http

import (
	"log"

	"github.com/gofiber/fiber/v2"
)

type Middleware struct {
	i *int
}

func NewMiddleware() *Middleware {
	i := 1
	return &Middleware{&i}
}

func (m *Middleware) Log(c *fiber.Ctx) error {
	log.Println(*m.i, c.Method(), c.Hostname(), c.OriginalURL())
	*m.i++
	return c.Next()
}
