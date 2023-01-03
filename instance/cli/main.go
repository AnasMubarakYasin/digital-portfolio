package main

import (
	"fmt"
	"log"
	"os"

	"github.com/urfave/cli/v2"
)

func main() {
	app := &cli.App{
		Name:  "dport-cli",
		Usage: "digital portfolio command line interface",
		Action: func(ctx *cli.Context) error {
			fmt.Println("hai")
			return nil
		},
		Flags: []cli.Flag{
			&cli.StringFlag{
				Name:    "lang",
				Aliases: []string{"l"},
				Value:   "english",
				Usage:   "Language for the greeting",
			},
			&cli.StringFlag{
				Name:    "config",
				Aliases: []string{"c"},
				Usage:   "Load configuration from `FILE`",
			},
		},
		Commands: []*cli.Command{
			{
				Name:    "install",
				Aliases: []string{"i"},
				Usage:   "install application on system (only linux)",
				Action: func(*cli.Context) error {
					fmt.Println("install")
					return nil
				},
			},
			{
				Name:    "build",
				Aliases: []string{"b"},
				Usage:   "build application",
				Action: func(*cli.Context) error {
					fmt.Println("build")
					return nil
				},
			},
			{
				Name:    "service",
				Aliases: []string{"s"},
				Usage:   "service control",
				Action: func(*cli.Context) error {
					return nil
				},
				Subcommands: []*cli.Command{
					{
						Name:    "service",
						Aliases: []string{"s"},
						Usage:   "service controll",
						Action: func(*cli.Context) error {
							return nil
						},
					},
				},
			},
		},
	}
	if err := app.Run(os.Args); err != nil {
		log.Fatal(err)
	}
}
