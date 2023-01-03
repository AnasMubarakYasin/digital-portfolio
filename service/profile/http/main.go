package http

import (
	"digital-portfolio/service/profile/http/endpoint"
	"digital-portfolio/service/profile/source"
	"log"

	"github.com/gofiber/fiber/v2"
)

type Http struct {
	app     *fiber.App
	address string
}

func NewHttp(address string, s *source.Profile) *Http {
	app := fiber.New()
	ep := endpoint.NewProfile(s)
	m := NewMiddleware()
	app.Use(m.Log)
	app.Get("/name/:name", ep.Show)
	app.Get("/", ep.All)
	app.Post("/", ep.Create)
	app.Get("/:id", ep.Find)
	app.Patch("/:id", ep.Update)
	app.Delete("/:id", ep.Delete)
	app.Delete("/", ep.Clear)
	return &Http{app: app, address: address}
}

func (h *Http) Listen() error {
	log.Printf("http listening on %s\n", h.address)
	return h.app.Listen(h.address)
}
func (h *Http) Shutdown() error {
	log.Print("http shutting down")
	return h.app.Shutdown()
}
