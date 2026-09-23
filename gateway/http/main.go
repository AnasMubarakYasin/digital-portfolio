package http

import (
	"log"

	"github.com/gofiber/fiber/v3"
	"github.com/gofiber/fiber/v3/middleware/proxy"
)

type Http struct {
	addr string
	app  *fiber.App
}
type Address struct {
	Gateway string
	Web     string
	Auth    string
	Account string
	Storage string
	Profile string
}

func New(address *Address) *Http {

	// log.Printf("address %+v", address)

	app := fiber.New()
	prefix_storage := "/api/storage"
	prefix_account := "/api/account"
	prefix_profile := "/api/profile"

	// proxy.WithClient(&fasthttp.Client{
	// 	NoDefaultUserAgentHeader: true,
	// 	DisablePathNormalizing:   true,
	// 	MaxConnsPerHost:          2048,
	// 	// Allow self-signed certificates when proxying to HTTPS targets.
	// 	// SECURITY: disables certificate verification — use only when the
	// 	// upstream is on a trusted network.
	// 	TLSConfig: &tls.Config{
	// 		InsecureSkipVerify: true,
	// 		MinVersion:         tls.VersionTLS12,
	// 	},
	// })
	proxy.WithSecurityPolicy(proxy.SecurityPolicy{
		AllowedSchemes:  []string{"http", "https"},
		AllowPrivateIPs: true,
	})
	// defer proxy.WithSecurityPolicy(psp)

	web := Proxying("", []string{address.Web})
	auth := NewAuth([]string{address.Auth})
	storage := Proxying(prefix_storage, []string{address.Storage})
	account := Proxying(prefix_account, []string{address.Account})
	profile := Proxying(prefix_profile, []string{address.Profile})

	app.Use(NewLog())

	api_storage := app.Group(prefix_storage)
	api_storage.Post("/file/*", storage)
	api_storage.Get("/file/*", storage)

	api_account := app.Group(prefix_account)
	api_account.Post("/*/signup", account)
	api_account.Post("/*/signin", account)
	api_account.Use("/*", auth, account)

	api_profile := app.Group(prefix_profile)
	api_profile.Get("/", profile)
	api_profile.Get("/name/*", profile)
	api_profile.Use("/*", auth, profile)

	app.Get("/*", web)

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
