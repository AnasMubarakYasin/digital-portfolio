package main

import (
	instance "digital-portfolio/instance/http/client"
	"digital-portfolio/instance/types"
	"digital-portfolio/service/account/database"
	"digital-portfolio/service/account/database/model"
	"digital-portfolio/service/account/http"
	"digital-portfolio/service/account/http/client"
	"digital-portfolio/service/account/source"
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
	go monitor.Connect("account")
	defer monitor.Disconnect()
	monitor.Ready().Set(&types.LogData{Name: "account", Status: "starting", Time: time.Now()})

	env := instance.NewEnv("")
	db_uri, _ := env.Get("db_uri")
	db_account, _ := env.Get("db_account")
	address_account, _ := env.Get("address_account")
	address_auth, _ := env.Get("address_auth")
	address_profile, _ := env.Get("address_profile")

	db := database.NewDatabase(db_uri.Value, db_account.Value)
	db.Connect()
	defer db.Disconnect()
	mc := model.NewCustomer(db)
	ca := client.NewAuth(address_auth.Value)
	cp := client.NewProfile(address_profile.Value)
	sc := source.NewCustomer(mc, ca, cp)
	http := http.NewHttp(address_account.Value, sc)

	go func() {
		errs <- http.Listen()
	}()
	defer http.Shutdown()
	monitor.Ready().Set(&types.LogData{Name: "account", Status: "running", Time: time.Now()})
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
