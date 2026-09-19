package main

import (
	"digital-portfolio/instance/database"
	"digital-portfolio/instance/database/model"
	"digital-portfolio/instance/feature"
	"encoding/json"
	"flag"
	"log"
)

func main() {
	mode := flag.String("mode", "show", "running up or down seeder")
	flag.Parse()
	db := database.NewDatabase("mongodb://localhost/", "dport_instance")
	db.Connect()
	defer db.Disconnect()
	m_env := model.NewEnv(db)
	f_env := feature.NewEnv(m_env)
	log.Println("running seeder mode", *mode)
	switch *mode {
	case "up":
<<<<<<< HEAD
=======
		up(f_env)
>>>>>>> 75f4020 (feat: add storage service)
	case "down":
		down(f_env)
	case "reset":
		down(f_env)
		up(f_env)
	}
	all, err := f_env.All()
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
	env.Create("app_name", "digital portfolio")
	env.Create("app_env", "development")
	env.Create("app_key", "the_secret")

	env.Create("db_uri", "mongodb://localhost/")
	env.Create("db_auth", "dport_auth")
<<<<<<< HEAD
	env.Create("db_account", "dport_account")
	env.Create("db_storage", "dport_storage")
	env.Create("db_profile", "dport_profile")

	env.Create("address_gateway", "localhost:5000")
	env.Create("address_instance", "localhost:5010")
	env.Create("address_web", "localhost:5020")
	env.Create("address_auth", "localhost:5030")
	env.Create("address_account", "localhost:5040")
	env.Create("address_storage", "localhost:5050")
	env.Create("address_profile", "localhost:5060")
=======
	env.Create("db_storage", "dport_storage")
	env.Create("db_account", "dport_account")
	env.Create("db_profile", "dport_profile")

	env.Create("address_gateway", "localhost:3901")
	env.Create("address_instance", "localhost:3902")
	env.Create("address_storage", "localhost:3903")
	env.Create("address_auth", "localhost:3904")
	env.Create("address_account", "localhost:3905")
	env.Create("address_profile", "localhost:3906")
	env.Create("address_web", "localhost:3907")
>>>>>>> 75f4020 (feat: add storage service)
}
func down(env *feature.Env) {
	env.Clear()
}
