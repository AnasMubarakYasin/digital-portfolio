package http

import (
	"digital-portfolio/auth/authc"
	"log"

	"github.com/gofiber/fiber/v3"
)

type Http struct {
	addr string
	app  *fiber.App
}

func New(addr string, a *authc.Authc) *Http {
	app := fiber.New(fiber.Config{
		TrustProxy: true,
		TrustProxyConfig: fiber.TrustProxyConfig{
			Loopback:  true,
			Private:   true,
			LinkLocal: true,
		},
	})

	h := NewHandler(a)
	app.Use(NewLog())
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
	app.Get("/auth", h.Auth)
	app.Post("/gen", h.Gen)
	app.Use("/authc/*", h.Auth)
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
