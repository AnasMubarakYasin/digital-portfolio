package model

import (
	"context"
	"digital-portfolio/instance/database"
	"digital-portfolio/instance/errors"
	"digital-portfolio/instance/types"
	"log"

	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/bson/primitive"
	"go.mongodb.org/mongo-driver/mongo"
)

type Env struct {
	db   *database.Database
	ctx  *context.Context
	coll *mongo.Collection
}

func NewEnv(db *database.Database) *Env {
	coll := db.Db.Collection("environtments")
	if coll == nil {
		log.Fatal("Database not yet connected")
	}
	ctx := context.TODO()
	return &Env{db, &ctx, coll}
}
func (c *Env) FindAll() (*[]types.Env, error) {
	dat := &[]types.Env{}
	cur, err := c.coll.Find(*c.ctx, bson.D{})
	if err != nil {
		return nil, errors.Unknown
	}
	cur.All(*c.ctx, dat)
	return dat, nil
}
func (c *Env) InsertOne(p *types.ParamCreateEnv) (*types.Env, error) {
	result, err := c.coll.InsertOne(*c.ctx, &p)
	if err != nil {
		return nil, errors.Unknown
	}
	data := &types.Env{}
	if err := c.coll.FindOne(*c.ctx, bson.D{{Key: "_id", Value: result.InsertedID}}).Decode(data); err != nil {
		if err == mongo.ErrNoDocuments {
			return nil, errors.Empty
		}
		return nil, errors.Unknown
	}
	return data, nil
}
func (c *Env) FindOne(filter interface{}) (*types.Env, error) {
	dat := &types.Env{}
	if err := c.coll.FindOne(*c.ctx, filter).Decode(dat); err != nil {
		if err == mongo.ErrNoDocuments {
			return nil, errors.Empty
		}
		return nil, errors.Unknown
	}
	return dat, nil
}
func (c *Env) FindOneById(id string) (*types.Env, error) {
	dat := &types.Env{}
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
func (c *Env) UpdateOne(filter interface{}, p *types.ParamUpdateEnv) (*types.Env, error) {
	dat := &types.Env{}
	if err := c.coll.FindOneAndUpdate(*c.ctx, filter, bson.D{{Key: "$set", Value: p}}).Decode(dat); err != nil {
		if err == mongo.ErrNoDocuments {
			return nil, errors.Empty
		}
		return nil, errors.Unknown
	}
	return dat, nil
}
func (c *Env) UpdateOneById(id string, p *types.ParamUpdateEnv) (*types.Env, error) {
	obj_id, err := primitive.ObjectIDFromHex(id)
	if err != nil {
		if err == mongo.ErrNoDocuments {
			return nil, errors.Empty
		}
		return nil, errors.Unknown
	}
	dat := &types.Env{}
	result := c.coll.FindOneAndUpdate(*c.ctx, bson.D{{Key: "_id", Value: obj_id}}, bson.D{{Key: "$set", Value: p}})
	if err := result.Decode(dat); err != nil {
		if err == mongo.ErrNoDocuments {
			return nil, errors.Empty
		}
		return nil, errors.Unknown
	}
	return dat, nil
}
func (c *Env) DeleteOne(filter interface{}) (*types.Env, error) {
	dat := &types.Env{}
	if err := c.coll.FindOneAndDelete(*c.ctx, filter).Decode(dat); err != nil {
		if err == mongo.ErrNoDocuments {
			return nil, errors.Empty
		}
		return nil, errors.Unknown
	}
	return dat, nil
}
func (c *Env) DeleteOneById(id string) (*types.Env, error) {
	obj_id, err := primitive.ObjectIDFromHex(id)
	if err != nil {
		return nil, errors.Unknown
	}
	dat := &types.Env{}
	result := c.coll.FindOneAndDelete(*c.ctx, bson.D{{Key: "_id", Value: obj_id}})
	if err := result.Decode(dat); err != nil {
		if err == mongo.ErrNoDocuments {
			return nil, errors.Empty
		}
		return nil, errors.Unknown
	}
	return dat, nil
}
func (c *Env) DeleteAll() (*[]types.Env, error) {
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
