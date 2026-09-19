package client

import (
	"digital-portfolio/instance/types"
	"errors"
	"log"
	"os"
	"os/signal"

	"github.com/fasthttp/websocket"
)

type Monitor struct {
	Addr      string
	sign      chan bool
<<<<<<< HEAD
=======
	errs      *chan error
>>>>>>> 75f4020 (feat: add storage service)
	connected bool
	lfx       []*func()
	conn      *websocket.Conn
}

<<<<<<< HEAD
func NewMonitor(addr string) *Monitor {
	if addr == "" {
		addr = types.InstanceAddress
	}
	return &Monitor{Addr: addr, sign: make(chan bool), connected: false, lfx: []*func(){}}
=======
func NewMonitor(addr string, errs *chan error) *Monitor {
	if addr == "" {
		addr = types.InstanceAddress
	}
	return &Monitor{Addr: addr, sign: make(chan bool), errs: errs, connected: false, lfx: []*func(){}}
>>>>>>> 75f4020 (feat: add storage service)
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
<<<<<<< HEAD
=======
		log.Println(err)
		*monitor.errs <- err
>>>>>>> 75f4020 (feat: add storage service)
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
<<<<<<< HEAD
			select {
			case <-interrupt:
				if err := conn.WriteMessage(websocket.CloseMessage, websocket.FormatCloseMessage(websocket.CloseNormalClosure, "")); err != nil {
					log.Println(err)
					return
				}
				return
			}
		}
=======
			if err := <-interrupt; err != nil {
				log.Println(err)
				return
			}
			if err := conn.WriteMessage(websocket.CloseMessage, websocket.FormatCloseMessage(websocket.CloseNormalClosure, "")); err != nil {
				log.Println(err)
				return
			}
		}
		// for {
		// 	select {
		// 	case <-interrupt:
		// 		if err := conn.WriteMessage(websocket.CloseMessage, websocket.FormatCloseMessage(websocket.CloseNormalClosure, "")); err != nil {
		// 			log.Println(err)
		// 			return
		// 		}
		// 		return
		// 	}
		// }
>>>>>>> 75f4020 (feat: add storage service)
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
<<<<<<< HEAD
=======
			log.Println(err)
			*monitor.errs <- err
>>>>>>> 75f4020 (feat: add storage service)
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
<<<<<<< HEAD
=======
		log.Println(err)
		*monitor.errs <- err
>>>>>>> 75f4020 (feat: add storage service)
		return err
	}
	message := &types.WebsocketMessage{Name: "Set", Param: *param, ParamSet: *param}
	if err := monitor.conn.WriteJSON(message); err != nil {
		log.Println(err)
<<<<<<< HEAD
=======
		*monitor.errs <- err
>>>>>>> 75f4020 (feat: add storage service)
	}
	return nil
}
