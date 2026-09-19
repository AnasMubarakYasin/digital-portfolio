package main

import (
	instance "digital-portfolio/instance/http/client"
	"digital-portfolio/instance/types"
	"digital-portfolio/storage/database"
	"digital-portfolio/storage/database/model"
	"digital-portfolio/storage/http"

	// "digital-portfolio/storage/http/client"
	"digital-portfolio/storage/source"
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

	monitor := instance.NewMonitor("", &errs)
	go monitor.Connect("storage")
	defer monitor.Disconnect()
	go monitor.Ready().Set(&types.LogData{Name: "storage", Status: "starting", Time: time.Now()})

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

	go func() {
		errs <- http.Listen()
	}()
	defer http.Shutdown()
	go monitor.Ready().Set(&types.LogData{Name: "storage", Status: "running", Time: time.Now()})
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
