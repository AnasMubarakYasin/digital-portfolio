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

	app := fiber.New(fiber.Config{
		TrustProxy: true,
		TrustProxyConfig: fiber.TrustProxyConfig{
			Loopback:  true, // 127.0.0.0/8, ::1/128
			Private:   true, // 10.0.0.0/8, 172.16.0.0/12, 192.168.0.0/16
			LinkLocal: true, // 169.254.0.0/16, fe80::/10
		},
	})

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

	auth := NewAuth([]string{address.Auth}, "/authc")
	account := Proxying(prefix_account, []string{address.Account})
	profile := Proxying(prefix_profile, []string{address.Profile})
	storage := Proxying(prefix_storage, []string{address.Storage})
	web := Proxying("", []string{address.Web})

	app.Use(NewLog())

	app.Get("/debug/proxy", func(c fiber.Ctx) error {
		return c.JSON(fiber.Map{
			"c.IP()":     c.IP(),
			"c.IPs()":    c.IPs(),
			"c.Scheme()": c.Scheme(),
			// "IsProxyTrusted":    c.IsProxyTrusted(),
			// "X-Forwarded-For":   c.Get("X-Forwarded-For"),
			// "X-Forwarded-Proto": c.Get("X-Forwarded-Proto"),
		})
	})

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
	api_profile.Post("/visitor", profile)
	api_profile.Use("/*", auth, profile)

	app.Get("/*", web)

	app.Use(NewNotFound())

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
