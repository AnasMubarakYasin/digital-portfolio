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
	log.Println("application starting on", os.Getpid())
	errs := make(chan error)
<<<<<<< HEAD
	signaler := make(chan os.Signal, 1)
	signal.Notify(signaler, os.Interrupt, syscall.SIGINT, syscall.SIGTERM)

	monitor := instance.NewMonitor("")
	go monitor.Connect("auth")
	defer monitor.Disconnect()
	monitor.Ready().Set(&types.LogData{Name: "auth", Status: "starting", Time: time.Now()})
=======
	interrupt := make(chan os.Signal, 1)
	signal.Notify(interrupt, os.Interrupt, syscall.SIGINT, syscall.SIGTERM)

	monitor := instance.NewMonitor("", &errs)
	go monitor.Connect("auth")
	defer monitor.Disconnect()
	go monitor.Ready().Set(&types.LogData{Name: "auth", Status: "starting", Time: time.Now()})
>>>>>>> 75f4020 (feat: add storage service)

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
<<<<<<< HEAD
	monitor.Ready().Set(&types.LogData{Name: "auth", Status: "running", Time: time.Now()})
=======
	go monitor.Ready().Set(&types.LogData{Name: "auth", Status: "running", Time: time.Now()})
>>>>>>> 75f4020 (feat: add storage service)
	for {
		select {
		case err := <-errs:
			log.Println(err)
			return
<<<<<<< HEAD
		case sign := <-signaler:
=======
		case sign := <-interrupt:
>>>>>>> 75f4020 (feat: add storage service)
			log.Println(sign)
			return
		}
	}
}
