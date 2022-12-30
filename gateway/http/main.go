package http

import (
	"log"

	"github.com/gofiber/fiber/v2"
)

type Http struct {
	addr string
	app  *fiber.App
}
type Address struct {
	Gateway string
	Auth    string
	Account string
	Storage string
	Profile string
}

func New(address *Address) *Http {
	app := fiber.New(fiber.Config{DisableStartupMessage: true})
	account := NewAccount([]string{address.Account})
	profile := NewProfile([]string{address.Profile})

	app.Use(NewLog())
	api_account := app.Group("/account")
	api_account.Post("/*/signup", account.Proxy)
	api_account.Post("/*/signin", account.Proxy)
	api_account.Use("/*", NewAuth([]string{address.Auth}), account.Proxy)

	api_profile := app.Group("/profile")
	api_profile.Get("/", profile.Proxy)
	api_profile.Get("/name/*", profile.Proxy)
	api_profile.Use("/*", NewAuth([]string{address.Auth}), profile.Proxy)

	return &Http{address.Gateway, app}
}

func (h *Http) Listen() error {
	log.Printf("http listening on %s\n", h.addr)
	return h.app.Listen(h.addr)
}
func (h *Http) Shutdown() error {
	log.Print("http shutting down")
	return h.app.Shutdown()
}
