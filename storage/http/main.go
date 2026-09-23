package http

import (
	"digital-portfolio/storage/http/endpoint"
	"digital-portfolio/storage/source"
	"log"

	"github.com/gofiber/fiber/v3"
)

type Http struct {
	app     *fiber.App
	address string
}

func NewHttp(address string, s *source.File) *Http {
	app := fiber.New(fiber.Config{StreamRequestBody: true, BodyLimit: 32 * 1024 * 1024})
	ef := endpoint.NewFile(s)
	m := NewMiddleware()
	app.Use(m.Log)
	app.Get("/", ef.All)
	app.Post("/", ef.Create)
	app.Get("/:id", ef.Find)
	app.Patch("/:id", ef.Update)
	app.Delete("/:id", ef.Delete)
	app.Delete("/", ef.Clear)
	app.Post("/file/+", ef.Upload)
	app.Get("/file/+", ef.Download)
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
