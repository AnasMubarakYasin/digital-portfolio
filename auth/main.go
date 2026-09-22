package main

import (
	"digital-portfolio/auth/authc"
	"digital-portfolio/auth/http"
	instance "digital-portfolio/instance/http/client"
	"digital-portfolio/instance/types"
	"log"
	"os"
	"os/signal"
	"syscall"
	"time"
)

func main() {
	log.SetFlags(log.Lmicroseconds | log.Lshortfile)
	log.Println("application process", os.Getpid())

	sv_name := "auth"

	monitor := instance.NewMonitor("", sv_name)
	monitor.Connect()
	defer monitor.Disconnect()
	monitor.Set(&types.LogData{Name: sv_name, Status: "starting", Time: time.Now()})

	env := instance.NewEnv("")
	address_auth, _ := env.Get("address_auth")
	address_account, _ := env.Get("address_account")
	app_key, _ := env.Get("app_key")
	c := http.NewClient(address_account.Value)
	a := authc.New([]byte(app_key.Value), c)
	http := http.New(address_auth.Value, a)

	errs := make(chan error)
	interrupt := make(chan os.Signal, 1)
	signal.Notify(interrupt, os.Interrupt, syscall.SIGINT, syscall.SIGTERM)
	go func() {
		errs <- http.Listen()
	}()
	defer http.Shutdown()
	monitor.Set(&types.LogData{Name: sv_name, Status: "running", Time: time.Now()})
	for {
		select {
		case err := <-errs:
			log.Println(err)
			return
		case sign := <-interrupt:
			log.Println(sign)
			return
		}
	}
}
