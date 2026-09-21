package main

import (
	"digital-portfolio/instance/database"
	"digital-portfolio/instance/database/model"
	"digital-portfolio/instance/feature"
	"digital-portfolio/instance/http"
	"log"
	"os"
	"os/signal"
	"syscall"

	"github.com/joho/godotenv"
)

func main() {
	log.SetFlags(log.Lmicroseconds | log.Lshortfile)
	log.Println("process id", os.Getpid())

	errc := make(chan error)

	err := godotenv.Load()
	if err != nil {
		log.Fatal("Error loading .env file")
	}

	db := database.NewDatabase(os.Getenv("DB_URI"), os.Getenv("DB_NAME"))
	db.Connect()
	defer db.Disconnect()

	md_env := model.NewEnv(db)

	ft_monitor := feature.NewMonitor()
	ft_env := feature.NewEnv(md_env)

	sv_http := http.NewHttp(os.Getenv("HTTP_ADDR"), ft_monitor, ft_env)
	go func() {
		errc <- sv_http.Listen()
	}()
	defer sv_http.Shutdown()

	ft_monitor.Start()
	defer ft_monitor.Stop()

	sigc := make(chan os.Signal, 1)
	signal.Notify(sigc, os.Interrupt, syscall.SIGINT, syscall.SIGTERM)
	for {
		select {
		case err := <-errc:
			log.Println(err)
			return
		case sign := <-sigc:
			log.Println(sign)
			return
		}
	}
}
