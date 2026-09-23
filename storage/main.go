package main

import (
	instance "digital-portfolio/instance/http/client"
	"digital-portfolio/instance/types"
	"digital-portfolio/storage/database"
	"digital-portfolio/storage/database/model"
	"digital-portfolio/storage/http"
	"os/signal"
	"syscall"

	// "digital-portfolio/storage/http/client"
	"digital-portfolio/storage/source"
	"log"
	"os"
	"time"
)

func main() {
	log.SetFlags(log.Lmicroseconds | log.Lshortfile)
	log.Println("application starting on", os.Getpid())

	sv_name := "storage"

	monitor := instance.NewMonitor("", sv_name)
	monitor.Connect()
	defer monitor.Disconnect()
	monitor.Set(&types.LogData{Name: sv_name, Status: "starting", Time: time.Now()})

	env := instance.NewEnv("")
	db_uri, _ := env.Get("db_uri")
	db_storage, _ := env.Get("db_storage")
	address_storage, _ := env.Get("address_storage")

	cwd, err := os.Getwd()
	if err != nil {
		panic(err)
	}
	rt := cwd + "/" + "files"

	db := database.NewDatabase(db_uri.Value, db_storage.Value)
	db.Connect()
	defer db.Disconnect()

	mf := model.NewFile(db)
	sc := source.NewFile(rt, mf)
	http := http.NewHttp(address_storage.Value, sc)

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
