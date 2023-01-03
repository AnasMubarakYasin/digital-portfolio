package main

import (
	"digital-portfolio/instance/database"
	"digital-portfolio/instance/database/model"
	"digital-portfolio/instance/feature"
	"digital-portfolio/instance/http"
	"fmt"
	"log"
	"os"
	"os/signal"
	"syscall"
)

func main() {
	log.SetFlags(log.Lmicroseconds | log.Lshortfile)
	db := database.NewDatabase("mongodb://localhost/", "dport_instance")
	db.Connect()
	defer db.Disconnect()
	md_env := model.NewEnv(db)
	ft_monitor := feature.NewMonitor()
	ft_env := feature.NewEnv(md_env)
	address_instance, err := ft_env.Get("address_instance")
	if err != nil {
		log.Fatal(err)
	}
	sv_http := http.NewHttp(address_instance.Value, ft_monitor, ft_env)
	ft_monitor.Start()
	defer ft_monitor.Stop()

	log.Println("process id", os.Getpid())
	errc := make(chan error)
	go func() {
		sigc := make(chan os.Signal, 1)
		signal.Notify(sigc, os.Interrupt, syscall.SIGINT, syscall.SIGTERM)
		errc <- fmt.Errorf("%s", <-sigc)
	}()
	go func() {
		errc <- sv_http.Listen()
	}()
	defer sv_http.Shutdown()
	log.Fatalln(<-errc)
}
