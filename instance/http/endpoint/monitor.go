package endpoint

import (
	"digital-portfolio/instance/feature"
	"digital-portfolio/instance/types"
	"log"
	"time"

	"github.com/gofiber/contrib/v3/websocket"
	"github.com/gofiber/contrib/v3/websocket/event"
	"github.com/gofiber/fiber/v3"
)

type Monitor struct {
	Feature *feature.Monitor
	Peers   map[*websocket.Conn]bool
}

func NewMonitor(monitor *feature.Monitor) *Monitor {
	return &Monitor{Feature: monitor, Peers: make(map[*websocket.Conn]bool)}
}

func (monitor *Monitor) Upgrade(ctx fiber.Ctx) error {
	if event.IsDraining() {
		return fiber.NewError(fiber.StatusServiceUnavailable, "shutting down")
	}
	// IsWebSocketUpgrade returns true if the client
	// requested upgrade to the WebSocket protocol.
	if websocket.IsWebSocketUpgrade(ctx) {
		ctx.Locals("allowed", true)
		return ctx.Next()
	}
	return fiber.ErrUpgradeRequired
}
func (monitor *Monitor) Handle(conn *websocket.Conn) {
	monitor.Feature.Set(&types.LogData{Name: conn.Params("name"), Status: "connected", Time: time.Now()})
	monitor.Peers[conn] = true
	defer conn.Close()
	close := conn.CloseHandler()
	conn.SetCloseHandler(func(code int, text string) error {
		monitor.Feature.Set(&types.LogData{Name: conn.Params("name"), Status: "disconnected", Time: time.Now()})
		delete(monitor.Peers, conn)
		return close(code, text)
	})
	for {
		message := &types.WebsocketMessage{}
		if err := conn.ReadJSON(message); err != nil {
			log.Println(err)
			return
		}
		log.Println(message.Name)
		switch message.Name {
		case "Set":
			monitor.Feature.Set(&message.ParamSet)
		}
		message = &types.WebsocketMessage{Name: "Success"}
		if err := conn.WriteJSON(message); err != nil {
			log.Println(err)
			return
		}
	}
}
