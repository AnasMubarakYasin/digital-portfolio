package main

import (
	"golokal/instance/http/client"
	"golokal/instance/types"
	"log"
	"os"
	"time"

	"github.com/joho/godotenv"
)

func main() {
	log.SetFlags(log.Lmicroseconds | log.Lshortfile)
	if err := godotenv.Load(); err != nil {
		log.Println("No .env file found")
	}
	http_addr := os.Getenv("HTTP_ADDR")
	if http_addr == "" {
		log.Fatal("You must set your environmental variable.")
	}
	monitor := client.NewMonitor(http_addr)
	monitor.OnConnected(func() {
		time.Sleep(2 * time.Second)
		monitor.Set(&types.LogData{Name: "auth", Status: "starting", Time: time.Now()})
		time.Sleep(2 * time.Second)
		monitor.Set(&types.LogData{Name: "auth", Status: "running", Time: time.Now()})
	})
	time.Sleep(2 * time.Second)
	log.Fatalln(monitor.Connect("auth"))
}
