package main

import (
	"digital-portfolio/gateway/http"
	instance "digital-portfolio/instance/http/client"
	"digital-portfolio/instance/types"
	"fmt"
	"log"
	"os"
	"os/signal"
	"syscall"
	"time"
)

func main() {
	log.SetFlags(log.Lmicroseconds | log.Lshortfile)
	log.Println("application starting on", os.Getpid())
<<<<<<< HEAD

	monitor := instance.NewMonitor("")
	go monitor.Connect("gateway")
	defer monitor.Disconnect()
	monitor.Ready().Set(&types.LogData{Name: "gateway", Status: "starting", Time: time.Now()})
=======
	errs := make(chan error)

	monitor := instance.NewMonitor("", &errs)
	go monitor.Connect("gateway")
	defer monitor.Disconnect()
	go monitor.Ready().Set(&types.LogData{Name: "gateway", Status: "starting", Time: time.Now()})
>>>>>>> 75f4020 (feat: add storage service)

	env := instance.NewEnv("")
	address_gateway, _ := env.Get("address_gateway")
	address_web, _ := env.Get("address_web")
	address_auth, _ := env.Get("address_auth")
	address_account, _ := env.Get("address_account")
	address_storage, _ := env.Get("address_storage")
	address_profile, _ := env.Get("address_profile")

	http := http.New(&http.Address{
		Gateway: address_gateway.Value,
		Web:     address_web.Value,
		Auth:    address_auth.Value,
		Account: address_account.Value,
		Storage: address_storage.Value,
		Profile: address_profile.Value,
	})

<<<<<<< HEAD
	errc := make(chan error)
	go func() {
		sigc := make(chan os.Signal, 1)
		signal.Notify(sigc, os.Interrupt, syscall.SIGINT, syscall.SIGTERM)
		errc <- fmt.Errorf("%s", <-sigc)
	}()
	go func() {
		monitor.Ready().Set(&types.LogData{Name: "gateway", Status: "running", Time: time.Now()})
		errc <- http.Listen()
	}()
	defer http.Shutdown()
	log.Fatalln(<-errc)
=======
	go func() {
		sigc := make(chan os.Signal, 1)
		signal.Notify(sigc, os.Interrupt, syscall.SIGINT, syscall.SIGTERM)
		errs <- fmt.Errorf("%s", <-sigc)
	}()
	go func() {
		errs <- http.Listen()
	}()
	defer http.Shutdown()
	go monitor.Ready().Set(&types.LogData{Name: "gateway", Status: "running", Time: time.Now()})
	log.Fatalln(<-errs)
>>>>>>> 75f4020 (feat: add storage service)
}
