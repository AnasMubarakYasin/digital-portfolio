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

func (d *Database) Connect() {
	client, err := mongo.Connect(*d.ctx, options.Client().ApplyURI(d.Uri))
	if err != nil {
		log.Fatal("You must set your environmental variable.")
	}
	if err := client.Ping(*d.ctx, readpref.Primary()); err != nil {
		panic(err)
	}
	log.Println("database connected")
	d.Cli = client
	d.Db = client.Database(d.name)
}
func (d *Database) Disconnect() {
	if d.Cli != nil {
		if err := d.Cli.Disconnect(*d.ctx); err != nil {
			panic(err)
		}
		d.Cli = nil
		d.Db = nil
	}
	log.Println("database disconnected")
}
