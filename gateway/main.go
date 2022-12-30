package main

import (
	"golokal/gateway/http"
	instance "golokal/instance/http/client"
	"golokal/instance/types"
	"log"
	"os"
	"os/signal"
	"syscall"
	"time"
)

func main() {
	log.SetFlags(log.Lmicroseconds | log.Lshortfile)
	log.Println("application starting on", os.Getpid())
	errs := make(chan error)
	signaler := make(chan os.Signal, 1)
	signal.Notify(signaler, os.Interrupt, syscall.SIGINT, syscall.SIGTERM)

	monitor := instance.NewMonitor("")
	go monitor.Connect("gateway")
	defer monitor.Disconnect()
	monitor.Ready().Set(&types.LogData{Name: "gateway", Status: "starting", Time: time.Now()})

	env := instance.NewEnv("")
	address_gateway, _ := env.Get("address_gateway")
	address_auth, _ := env.Get("address_auth")
	address_account, _ := env.Get("address_account")
	address_storage, _ := env.Get("address_storage")
	address_profile, _ := env.Get("address_profile")

	http := http.New(&http.Address{
		Gateway: address_gateway.Value,
		Auth:    address_auth.Value,
		Account: address_account.Value,
		Storage: address_storage.Value,
		Profile: address_profile.Value,
	})

	go func() {
		errs <- http.Listen()
	}()
	defer http.Shutdown()
	monitor.Ready().Set(&types.LogData{Name: "gateway", Status: "running", Time: time.Now()})
	for {
		select {
		case err := <-errs:
			log.Println(err)
			return
		case sign := <-signaler:
			log.Println(sign)
			return
		}
	}
}
