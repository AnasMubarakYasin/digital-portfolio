package main

import (
	instance "golokal/instance/http/client"
	"golokal/instance/types"
	"golokal/service/profile/database"
	"golokal/service/profile/database/model"
	"golokal/service/profile/http"
	"golokal/service/profile/http/client"
	"golokal/service/profile/source"
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
	go monitor.Connect("profile")
	defer monitor.Disconnect()
	monitor.Ready().Set(&types.LogData{Name: "profile", Status: "starting", Time: time.Now()})

	env := instance.NewEnv("")
	db_uri, _ := env.Get("db_uri")
	db_profile, _ := env.Get("db_profile")
	address_account, _ := env.Get("address_account")
	address_profile, _ := env.Get("address_profile")

	db := database.NewDatabase(db_uri.Value, db_profile.Value)
	db.Connect()
	defer db.Disconnect()
	mc := model.NewProfile(db)
	ca := client.NewAuth(address_account.Value)
	sc := source.NewProfile(mc, ca)
	http := http.NewHttp(address_profile.Value, sc)

	go func() {
		errs <- http.Listen()
	}()
	defer http.Shutdown()
	monitor.Ready().Set(&types.LogData{Name: "profile", Status: "running", Time: time.Now()})
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
