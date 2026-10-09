package http

import (
	"digital-portfolio/service/profile/http/endpoint"
	"digital-portfolio/service/profile/source"
	"log"

	"github.com/gofiber/fiber/v3"
)

type Http struct {
	app     *fiber.App
	address string
}

func NewHttp(address string, s *source.Profile, sv *source.Visitor) *Http {
	app := fiber.New(fiber.Config{
		TrustProxy: true,
		TrustProxyConfig: fiber.TrustProxyConfig{
			Loopback:  true,
			Private:   true,
			LinkLocal: true,
		},
	})

	ep := endpoint.NewProfile(s, sv)
	ev := endpoint.NewVisitor(sv)
	m := NewMiddleware()

	app.Use(m.Log)

	app.Get("/debug/proxy", func(c fiber.Ctx) error {
		return c.JSON(fiber.Map{
			"c.IP()":            c.IP(),
			"c.IPs()":           c.IPs(),
			"c.Scheme()":        c.Scheme(),
			"IsProxyTrusted":    c.IsProxyTrusted(),
			"Forwarded":         c.Get("Forwarded"),
			"X-Real-IP":         c.Get("X-Real-IP"),
			"X-Forwarded-For":   c.Get("X-Forwarded-For"),
			"X-Forwarded-Proto": c.Get("X-Forwarded-Proto"),
		})
	})

	app.Get("/name/:name", ep.Show)
	app.Post("/visitor", ev.Count)

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
