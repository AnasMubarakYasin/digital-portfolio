package main

import (
	instance "digital-portfolio/instance/http/client"
	"digital-portfolio/instance/types"
	"digital-portfolio/service/profile/database"
	"digital-portfolio/service/profile/database/model"
	"digital-portfolio/service/profile/http"
	"digital-portfolio/service/profile/http/client"
	"digital-portfolio/service/profile/source"
	"log"
	"os"
	"os/signal"
	"syscall"
	"time"
)

func main() {
	log.SetFlags(log.Lmicroseconds | log.Lshortfile)
	log.Println("application starting on", os.Getpid())

	sv_name := "profile"

	monitor := instance.NewMonitor("", sv_name)
	monitor.Connect()
	defer monitor.Disconnect()
	monitor.Set(&types.LogData{Name: sv_name, Status: "starting", Time: time.Now()})

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

	errs := make(chan error)
	go func() {
		errs <- http.Listen()
	}()
	defer http.Shutdown()
	monitor.Set(&types.LogData{Name: sv_name, Status: "running", Time: time.Now()})

	interrupt := make(chan os.Signal, 1)
	signal.Notify(interrupt, os.Interrupt, syscall.SIGINT, syscall.SIGTERM)
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
