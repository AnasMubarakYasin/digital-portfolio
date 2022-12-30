package database

import (
	"context"
	"log"

	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
	"go.mongodb.org/mongo-driver/mongo/readpref"
)

type Database struct {
	Uri  string
	name string
	ctx  *context.Context
	Cli  *mongo.Client
	Db   *mongo.Database
}

func NewDatabase(uri string, name string) *Database {
	ctx := context.TODO()
	return &Database{uri, name, &ctx, nil, nil}
}

func (db *Database) Connect() {
	client, err := mongo.Connect(*db.ctx, options.Client().ApplyURI(db.Uri))
	if err != nil {
		log.Fatal("You must set your environmental variable.")
	}
	if err := client.Ping(*db.ctx, readpref.Primary()); err != nil {
		panic(err)
	}
	log.Println("database connected")
	db.Cli = client
	db.Db = client.Database(db.name)
}
func (db *Database) Disconnect() {
	if db.Cli != nil {
		if err := db.Cli.Disconnect(*db.ctx); err != nil {
			panic(err)
		}
		db.Cli = nil
		db.Db = nil
	}
	log.Println("database disconnected")
}
