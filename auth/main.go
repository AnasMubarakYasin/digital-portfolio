package main

import (
	"golokal/auth/authc"
	"golokal/auth/http"
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
	go monitor.Connect("auth")
	defer monitor.Disconnect()
	monitor.Ready().Set(&types.LogData{Name: "auth", Status: "starting", Time: time.Now()})

	env := instance.NewEnv("")
	address_auth, _ := env.Get("address_auth")
	address_account, _ := env.Get("address_account")
	app_key, _ := env.Get("app_key")
	c := http.NewClient(address_account.Value)
	a := authc.New([]byte(app_key.Value), c)
	http := http.New(address_auth.Value, a)

	go func() {
		errs <- http.Listen()
	}()
	defer http.Shutdown()
	monitor.Ready().Set(&types.LogData{Name: "auth", Status: "running", Time: time.Now()})
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
