package endpoint

import (
	"digital-portfolio/instance/feature"
	"digital-portfolio/instance/types"
	"log"
	"time"

	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/websocket/v2"
)

type Monitor struct {
	Feature *feature.Monitor
}

func NewMonitor(monitor *feature.Monitor) *Monitor {
	return &Monitor{Feature: monitor}
}

func (monitor *Monitor) Upgrade(ctx *fiber.Ctx) error {
	if websocket.IsWebSocketUpgrade(ctx) {
		return ctx.Next()
	}
	return fiber.ErrUpgradeRequired
}
func (monitor *Monitor) Handle(conn *websocket.Conn) {
	monitor.Feature.Set(&types.LogData{Name: conn.Params("name"), Status: "connected", Time: time.Now()})
	defer conn.Close()
	close := conn.CloseHandler()
	conn.SetCloseHandler(func(code int, text string) error {
		monitor.Feature.Set(&types.LogData{Name: conn.Params("name"), Status: "disconnected", Time: time.Now()})
		close(code, text)
		return nil
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
