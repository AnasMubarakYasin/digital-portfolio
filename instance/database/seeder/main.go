package main

import (
	"digital-portfolio/instance/database"
	"digital-portfolio/instance/database/model"
	"digital-portfolio/instance/feature"
	"encoding/json"
	"flag"
	"log"
	"os"

	"github.com/joho/godotenv"
)

func main() {
	mode := flag.String("mode", "show", "running up or down seeder")
	flag.Parse()

	err := godotenv.Load()
	if err != nil {
		log.Fatal("Error loading .env file")
	}

	db := database.NewDatabase(os.Getenv("DB_URI"), os.Getenv("DB_NAME"))
	db.Connect()
	defer db.Disconnect()

	md_env := model.NewEnv(db)
	ft_env := feature.NewEnv(md_env)

	log.Println("running seeder mode", *mode)
	switch *mode {
	case "up":
		up(ft_env)
	case "down":
		down(ft_env)
	case "reset":
		down(ft_env)
		up(ft_env)
	}
	all, err := ft_env.All()
	if err != nil {
		log.Fatal(err)
	}
	json, err := json.MarshalIndent(all, "", "\t")
	if err != nil {
		log.Fatal(err)
	}
	log.Println(string(json))
}

func up(env *feature.Env) {
	env.Create("app_name", os.Getenv("APP_NAME"))
	env.Create("app_env", os.Getenv("APP_ENV"))
	env.Create("app_key", os.Getenv("APP_KEY"))
	env.Create("app_mode", os.Getenv("APP_KEY"))

	env.Create("db_uri", os.Getenv("DB_AUTH"))
	env.Create("db_auth", os.Getenv("DB_AUTH"))
	env.Create("db_storage", os.Getenv("DB_FILE"))
	env.Create("db_account", os.Getenv("DB_ACCOUNT"))
	env.Create("db_profile", os.Getenv("DB_PROFILE"))

	env.Create("address_gateway", os.Getenv("HTTP_GATEWAY"))
	env.Create("address_instance", os.Getenv("HTTP_INSTANCE"))
	env.Create("address_storage", os.Getenv("HTTP_STORAGE"))
	env.Create("address_auth", os.Getenv("HTTP_AUTH"))
	env.Create("address_account", os.Getenv("HTTP_ACCOUNT"))
	env.Create("address_profile", os.Getenv("HTTP_PROFILE"))
	env.Create("address_web", os.Getenv("HTTP_WEB"))
}
func down(env *feature.Env) {
	env.Clear()
}
