package main

import (
	"flag"
	"log"
)

func main() {
	service := flag.String("service", "start", "method of service")
	flag.Parse()
	// service := flag.CommandLine.String("service", "start", "name of service")
	// flag.CommandLine.Parse(flag.Args())
	log.SetFlags(log.Lmicroseconds | log.Lshortfile)
	log.Println(*service)
}
