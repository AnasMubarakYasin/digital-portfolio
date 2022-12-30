package client

import (
	"errors"
	"golokal/instance/types"
	"log"
	"os"
	"os/signal"

	"github.com/fasthttp/websocket"
)

type Monitor struct {
	Addr      string
	sign      chan bool
	connected bool
	lfx       []*func()
	conn      *websocket.Conn
}

func NewMonitor(addr string) *Monitor {
	if addr == "" {
		addr = types.InstanceAddress
	}
	return &Monitor{Addr: addr, sign: make(chan bool), connected: false, lfx: []*func(){}}
}

func (monitor *Monitor) Endpoint(name string) string {
	return "ws://" + monitor.Addr + "/monitor/" + name
}
func (monitor *Monitor) Check() error {
	if monitor.conn == nil {
		return errors.New("websocket not disconnect")
	}
	return nil
}
func (monitor *Monitor) Ready() *Monitor {
	if monitor.conn == nil {
		<-monitor.sign
	}
	return monitor
}
func (monitor *Monitor) Connect(id string) error {
	interrupt := make(chan os.Signal, 1)
	signal.Notify(interrupt, os.Interrupt)
	conn, _, err := websocket.DefaultDialer.Dial(monitor.Endpoint(id), nil)
	if err != nil {
		return err
	}
	defer monitor.Disconnect()
	monitor.conn = conn
	go func() {
		monitor.sign <- true
	}()
	log.Println("monitor client connected")
	monitor.SignalConnected()
	go func() {
		for {
			select {
			case <-interrupt:
				if err := conn.WriteMessage(websocket.CloseMessage, websocket.FormatCloseMessage(websocket.CloseNormalClosure, "")); err != nil {
					log.Println(err)
					return
				}
				return
			}
		}
	}()
	for {
		message := &types.WebsocketMessage{}
		if err := conn.ReadJSON(message); err != nil {
			log.Println(err)
			return nil
		}
		log.Println(message.Name)
	}
}
func (monitor *Monitor) Disconnect() error {
	if monitor.conn != nil {
		if err := monitor.conn.Close(); err != nil {
			return err
		}
		monitor.conn = nil
		go func() {
			monitor.sign <- false
		}()
	}
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
		return err
	}
	message := &types.WebsocketMessage{Name: "Set", Param: *param, ParamSet: *param}
	if err := monitor.conn.WriteJSON(message); err != nil {
		log.Println(err)
	}
	return nil
}
