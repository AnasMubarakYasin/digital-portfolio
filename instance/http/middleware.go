package http

import (
	"log"

	"github.com/gofiber/fiber/v2"
)

type Middleware struct {
	id *int
}

func NewMiddleware() *Middleware {
	i := 1
	return &Middleware{&i}
}

func (md *Middleware) Log(c *fiber.Ctx) error {
	log.Println(*md.id, c.Method(), c.Hostname(), c.OriginalURL())
	*md.id++
	return c.Next()
}
