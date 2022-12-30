package model

import (
	"context"
	"golokal/instance/database"
	"golokal/instance/errors"
	"golokal/instance/types"
	"log"

	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/bson/primitive"
	"go.mongodb.org/mongo-driver/mongo"
)

type Server struct {
	db   *database.Database
	ctx  *context.Context
	coll *mongo.Collection
}

func NewServer(d *database.Database) *Server {
	coll := d.Db.Collection("servers")
	if coll == nil {
		log.Fatal("Database not yet connected")
	}
	ctx := context.TODO()
	return &Server{d, &ctx, coll}
}
func (c *Server) FindAll() (*[]types.Server, error) {
	dat := &[]types.Server{}
	cur, err := c.coll.Find(*c.ctx, bson.D{})
	if err != nil {
		return nil, errors.Unknown
	}
	cur.All(*c.ctx, dat)
	return dat, nil
}
func (c *Server) InsertOne(p *types.Server) (*types.Server, error) {
	result, err := c.coll.InsertOne(*c.ctx, &p)
	if err != nil {
		return nil, errors.Unknown
	}
	data := &types.Server{}
	if err := c.coll.FindOne(*c.ctx, bson.D{{Key: "_id", Value: result.InsertedID}}).Decode(data); err != nil {
		if err == mongo.ErrNoDocuments {
			return nil, errors.Empty
		}
		return nil, errors.Unknown
	}
	return data, nil
}
func (c *Server) FindOne(filter interface{}) (*types.Server, error) {
	dat := &types.Server{}
	if err := c.coll.FindOne(*c.ctx, filter).Decode(dat); err != nil {
		if err == mongo.ErrNoDocuments {
			return nil, errors.Empty
		}
		return nil, errors.Unknown
	}
	return dat, nil
}
func (c *Server) FindOneById(id string) (*types.Server, error) {
	dat := &types.Server{}
	obj_id, err := primitive.ObjectIDFromHex(id)
	if err != nil {
		return nil, errors.Unknown
	}
	if err := c.coll.FindOne(*c.ctx, bson.D{{Key: "_id", Value: obj_id}}).Decode(dat); err != nil {
		if err == mongo.ErrNoDocuments {
			return nil, errors.Empty
		}
		return nil, errors.Unknown
	}
	return dat, nil
}
func (c *Server) UpdateOne(filter interface{}, p *types.Server) (*types.Server, error) {
	dat := &types.Server{}
	if err := c.coll.FindOneAndUpdate(*c.ctx, filter, bson.D{{Key: "$set", Value: p}}).Decode(dat); err != nil {
		if err == mongo.ErrNoDocuments {
			return nil, errors.Empty
		}
		return nil, errors.Unknown
	}
	return dat, nil
}
func (c *Server) UpdateOneById(id string, p *types.Server) (*types.Server, error) {
	obj_id, err := primitive.ObjectIDFromHex(id)
	if err != nil {
		if err == mongo.ErrNoDocuments {
			return nil, errors.Empty
		}
		return nil, errors.Unknown
	}
	dat := &types.Server{}
	result := c.coll.FindOneAndUpdate(*c.ctx, bson.D{{Key: "_id", Value: obj_id}}, bson.D{{Key: "$set", Value: p}})
	if err := result.Decode(dat); err != nil {
		if err == mongo.ErrNoDocuments {
			return nil, errors.Empty
		}
		return nil, errors.Unknown
	}
	return dat, nil
}
func (c *Server) DeleteOne(filter interface{}) (*types.Server, error) {
	dat := &types.Server{}
	if err := c.coll.FindOneAndDelete(*c.ctx, filter).Decode(dat); err != nil {
		if err == mongo.ErrNoDocuments {
			return nil, errors.Empty
		}
		return nil, errors.Unknown
	}
	return dat, nil
}
func (c *Server) DeleteOneById(id string) (*types.Server, error) {
	obj_id, err := primitive.ObjectIDFromHex(id)
	if err != nil {
		return nil, errors.Unknown
	}
	dat := &types.Server{}
	result := c.coll.FindOneAndDelete(*c.ctx, bson.D{{Key: "_id", Value: obj_id}})
	if err := result.Decode(dat); err != nil {
		if err == mongo.ErrNoDocuments {
			return nil, errors.Empty
		}
		return nil, errors.Unknown
	}
	return dat, nil
}
func (c *Server) DeleteAll() (*[]types.Server, error) {
	dat, err := c.FindAll()
	if err != nil {
		return nil, errors.Unknown
	}
	_, err = c.coll.DeleteMany(*c.ctx, bson.D{})
	if err != nil {
		return nil, errors.Unknown
	}
	return dat, nil
}
