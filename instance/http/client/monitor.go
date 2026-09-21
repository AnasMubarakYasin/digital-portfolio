package client

import (
	"digital-portfolio/instance/types"
	"errors"
	"log"
	"time"

	"github.com/fasthttp/websocket"
)

type Monitor struct {
	name string
	host string
	lfx  []*func()
	conn *websocket.Conn
}

func NewMonitor(host string, name string) *Monitor {
	if host == "" {
		// TODO - you should not use types constant instead use env HTTP_ADDR
		host = types.InstanceAddress
	}
	return &Monitor{host: host, name: name, lfx: []*func(){}}
}

func (monitor *Monitor) Endpoint(name string) string {
	return "ws://" + monitor.host + "/monitor/" + name
}
func (monitor *Monitor) Check() error {
	if monitor.conn == nil {
		return errors.New("websocket not connected")
	}
	return nil
}
func (monitor *Monitor) Connect() error {
	time.Sleep(3 * time.Second)
	conn, _, err := websocket.DefaultDialer.Dial(monitor.Endpoint(monitor.name), nil)
	if err != nil {
		panic(err)
	}
	monitor.conn = conn
	log.Println("monitor client connected")
	monitor.SignalConnected()
	go func() {
		for {
			message := &types.WebsocketMessage{}
			if err := conn.ReadJSON(message); err != nil {
				log.Println(err)
				break
			}
		}
	}()
	return nil
}
func (monitor *Monitor) Listen() error {
	return nil
}
func (monitor *Monitor) Disconnect() error {
	if monitor.conn == nil {
		return nil
	}
	if err := monitor.conn.WriteMessage(websocket.CloseMessage, websocket.FormatCloseMessage(websocket.CloseGoingAway, "")); err != nil {
		log.Println(err)
	}
	if err := monitor.conn.Close(); err != nil {
		log.Println(err)
		return err
	}
	monitor.conn = nil
	log.Println("monitor client disconnected")
	return nil
}
func (monitor *Monitor) OnConnected(fx func()) {
	monitor.lfx = append(monitor.lfx, &fx)
}
func (monitor *Monitor) SignalConnected() {
	for _, fx := range monitor.lfx {
		(*fx)()
	}
}
func (monitor *Monitor) Set(param *types.LogData) error {
	if err := monitor.Check(); err != nil {
		panic(err)
	}
	message := &types.WebsocketMessage{Name: "Set", Param: *param, ParamSet: *param}
	if err := monitor.conn.WriteJSON(message); err != nil {
		log.Println(err)
	}
	return nil
}
