package database

import (
	"context"
	"log"

	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
	"go.mongodb.org/mongo-driver/mongo/readpref"
)

type Database struct {
	URI  string
	name string
	ctx  *context.Context
	cl   *mongo.Client
	Db   *mongo.Database
}

func NewDatabase(uri string, name string) *Database {
	ctx := context.Background()
	return &Database{uri, name, &ctx, nil, nil}
}

func (d *Database) Connect() {
	client, err := mongo.Connect(*d.ctx, options.Client().ApplyURI(d.URI))
	if err != nil {
		panic(err)
	}
	if err := client.Ping(*d.ctx, readpref.Primary()); err != nil {
		panic(err)
	}
	log.Println("database connected")
	d.cl = client
	d.Db = client.Database(d.name)
}
func (d *Database) Disconnect() {
	if d.cl != nil {
		if err := d.cl.Disconnect(*d.ctx); err != nil {
			panic(err)
		}
		d.cl = nil
		d.Db = nil
	}
	log.Println("database disconnected")
}
