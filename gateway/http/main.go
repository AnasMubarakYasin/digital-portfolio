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
	Web     string
	Auth    string
	Account string
	Storage string
	Profile string
}

func New(address *Address) *Http {
	app := fiber.New(fiber.Config{DisableStartupMessage: true})
<<<<<<< HEAD
=======
	prefix_storage := "/api/storage"
>>>>>>> 75f4020 (feat: add storage service)
	prefix_account := "/api/account"
	prefix_profile := "/api/profile"

	web := Proxying("", []string{address.Web})
	auth := NewAuth([]string{address.Auth})
<<<<<<< HEAD
=======
	storage := Proxying(prefix_storage, []string{address.Storage})
>>>>>>> 75f4020 (feat: add storage service)
	account := Proxying(prefix_account, []string{address.Account})
	profile := Proxying(prefix_profile, []string{address.Profile})

	app.Use(NewLog())

<<<<<<< HEAD
=======
	api_storage := app.Group(prefix_storage)
	api_storage.Post("/file/*", storage)
	api_storage.Get("/file/*", storage)

>>>>>>> 75f4020 (feat: add storage service)
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
