package http

import (
	"digital-portfolio/instance/feature"
	"digital-portfolio/instance/http/endpoint"
	"log"

	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/websocket/v2"
)

type Http struct {
	address string
	app     *fiber.App
}

func NewHttp(addr string, ft_monitor *feature.Monitor, ft_env *feature.Env) *Http {
	app := fiber.New(fiber.Config{DisableStartupMessage: true})
	ep_monitor := endpoint.NewMonitor(ft_monitor)
	ep_env := endpoint.NewEnv(ft_env)
	md := NewMiddleware()

	app.Use(md.Log)
	gp_monitor := app.Group("/monitor")
	gp_monitor.Use("/", ep_monitor.Upgrade)
	gp_monitor.Use("/:name", websocket.New(ep_monitor.Handle))

	gp_env := app.Group("/env")
	gp_env.Get("/", ep_env.All)
	gp_env.Get("/:key", ep_env.Get)
	gp_env.Patch("/:key", ep_env.Set)
	gp_env.Post("/", ep_env.Create)
	gp_env.Delete("/:key", ep_env.Delete)
	gp_env.Patch("/:key/key", ep_env.SetKey)
	gp_env.Delete("/", ep_env.Clear)
	return &Http{address: addr, app: app}
}

func (h *Http) Listen() error {
	log.Printf("http listening on %s\n", h.address)
	return h.app.Listen(h.address)
}
func (h *Http) Shutdown() error {
	log.Print("http shutting down")
	return h.app.Shutdown()
}
