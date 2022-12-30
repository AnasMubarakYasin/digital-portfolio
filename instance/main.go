package main

import (
	"golokal/instance/database"
	"golokal/instance/database/model"
	"golokal/instance/feature"
	"golokal/instance/http"
	"log"
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
	log.Fatal(sv_http.Listen())
}
