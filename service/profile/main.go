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
	errs := make(chan error)
	signaler := make(chan os.Signal, 1)
	signal.Notify(signaler, os.Interrupt, syscall.SIGINT, syscall.SIGTERM)

<<<<<<< HEAD
	monitor := instance.NewMonitor("")
	go monitor.Connect("profile")
	defer monitor.Disconnect()
	monitor.Ready().Set(&types.LogData{Name: "profile", Status: "starting", Time: time.Now()})
=======
	monitor := instance.NewMonitor("", &errs)
	go monitor.Connect("profile")
	defer monitor.Disconnect()
	go monitor.Ready().Set(&types.LogData{Name: "profile", Status: "starting", Time: time.Now()})
>>>>>>> 75f4020 (feat: add storage service)

	env := instance.NewEnv("")
	db_uri, _ := env.Get("db_uri")
	db_profile, _ := env.Get("db_profile")
	address_account, _ := env.Get("address_account")
	address_profile, _ := env.Get("address_profile")

	db := database.NewDatabase(db_uri.Value, db_profile.Value)
	db.Connect()
	defer db.Disconnect()
	mc := model.NewProfile(db)
<<<<<<< HEAD
	ca := client.NewAuth(address_account.Value)
=======
	ca := client.NewStorage(address_account.Value)
>>>>>>> 75f4020 (feat: add storage service)
	sc := source.NewProfile(mc, ca)
	http := http.NewHttp(address_profile.Value, sc)

	go func() {
		errs <- http.Listen()
	}()
	defer http.Shutdown()
<<<<<<< HEAD
	monitor.Ready().Set(&types.LogData{Name: "profile", Status: "running", Time: time.Now()})
=======
	go monitor.Ready().Set(&types.LogData{Name: "profile", Status: "running", Time: time.Now()})
>>>>>>> 75f4020 (feat: add storage service)
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
