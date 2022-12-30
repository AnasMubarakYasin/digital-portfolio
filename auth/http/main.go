package http

import (
	"golokal/auth/authc"
	"log"

	"github.com/gofiber/fiber/v2"
)

type Http struct {
	addr string
	app  *fiber.App
}

func New(addr string, a *authc.Authc) *Http {
	app := fiber.New(fiber.Config{DisableStartupMessage: true})
	h := NewHandler(a)
	app.Use(NewLog())
	app.Get("/auth", h.Auth)
	app.Post("/gen", h.Gen)
	app.Use(h.Auth)
	return &Http{addr, app}
}

func (h *Http) Listen() error {
	log.Printf("http listening on %s\n", h.addr)
	return h.app.Listen(h.addr)
}
func (h *Http) Shutdown() error {
	log.Print("http shutting down")
	return h.app.Shutdown()
}
