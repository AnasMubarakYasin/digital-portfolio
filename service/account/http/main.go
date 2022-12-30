package http

import (
	"golokal/service/account/http/endpoint"
	"golokal/service/account/source"
	"log"

	"github.com/gofiber/fiber/v2"
)

type Http struct {
	app     *fiber.App
	address string
}

func NewHttp(address string, s *source.Customer) *Http {
	app := fiber.New()
	ecs := endpoint.NewCustomer(s)
	m := NewMiddleware()
	app.Use(m.Log)
	api_cs := app.Group("/customer")
	// api_admin := app.Group("/admin")
	api_cs.Get("/", ecs.All)
	api_cs.Post("/", ecs.Create)
	api_cs.Get("/:id", ecs.Find)
	api_cs.Patch("/:id", ecs.Update)
	api_cs.Delete("/:id", ecs.Delete)
	api_cs.Delete("/", ecs.Clear)
	api_cs.Post("/signup", ecs.SignUp)
	api_cs.Post("/signin", ecs.SignIn)
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
