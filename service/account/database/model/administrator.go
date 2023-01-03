package model

import (
	"context"
	"digital-portfolio/service/account/database"
	"digital-portfolio/service/account/errors"
	"digital-portfolio/service/account/types"
	"log"

	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/bson/primitive"
	"go.mongodb.org/mongo-driver/mongo"
)

type Administrator struct {
	db   *database.Database
	ctx  *context.Context
	coll *mongo.Collection
}

func NewAdministrator(d *database.Database) *Administrator {
	coll := d.Db.Collection("customers")
	if coll == nil {
		log.Fatal("Database not yet connected")
	}
	ctx := context.TODO()
	return &Administrator{d, &ctx, coll}
}
func (c *Administrator) All() (*[]types.Account, error) {
	dat := &[]types.Account{}
	cur, err := c.coll.Find(*c.ctx, bson.D{})
	if err != nil {
		return nil, &errors.Unknown{Cause: &err}
	}
	cur.All(*c.ctx, dat)
	return dat, nil
}
func (c *Administrator) Create(p *types.ParamCreate) (*types.Account, error) {
	result, err := c.coll.InsertOne(*c.ctx, &p)
	if err != nil {
		return nil, &errors.Unknown{Cause: &err}
	}
	dat := &types.Account{}
	if err := c.coll.FindOne(*c.ctx, bson.D{{Key: "_id", Value: result.InsertedID}}).Decode(dat); err != nil {
		if err == mongo.ErrNoDocuments {
			return nil, &errors.NoData{}
		}
		return nil, &errors.Unknown{Cause: &err}
	}
	return dat, nil
}
func (c *Administrator) FindOne(filter interface{}) (*types.Account, error) {
	dat := &types.Account{}
	if err := c.coll.FindOne(*c.ctx, filter).Decode(dat); err != nil {
		if err == mongo.ErrNoDocuments {
			return nil, &errors.NoData{}
		}
		return nil, &errors.Unknown{Cause: &err}
	}
	return dat, nil
}
func (c *Administrator) FindOneById(id string) (*types.Account, error) {
	dat := &types.Account{}
	obj_id, err := primitive.ObjectIDFromHex(id)
	if err != nil {
		return nil, &errors.Unknown{Cause: &err}
	}
	if err := c.coll.FindOne(*c.ctx, bson.D{{Key: "_id", Value: obj_id}}).Decode(dat); err != nil {
		if err == mongo.ErrNoDocuments {
			return nil, &errors.NoData{}
		}
		return nil, &errors.Unknown{Cause: &err}
	}
	return dat, nil
}
func (c *Administrator) UpdateOneById(id string, p *types.ParamUpdate) (*types.Account, error) {
	obj_id, err := primitive.ObjectIDFromHex(id)
	if err != nil {
		if err == mongo.ErrNoDocuments {
			return nil, &errors.NoData{}
		}
		return nil, &errors.Unknown{Cause: &err}
	}
	dat := &types.Account{}
	result := c.coll.FindOneAndUpdate(*c.ctx, bson.D{{Key: "_id", Value: obj_id}}, bson.D{{Key: "$set", Value: p}})
	if err := result.Decode(dat); err != nil {
		if err == mongo.ErrNoDocuments {
			return nil, &errors.NoData{}
		}
		return nil, &errors.Unknown{Cause: &err}
	}
	return dat, nil
}
func (c *Administrator) DeleteOneById(id string) (*types.Account, error) {
	obj_id, err := primitive.ObjectIDFromHex(id)
	if err != nil {
		return nil, &errors.Unknown{Cause: &err}
	}
	dat := &types.Account{}
	result := c.coll.FindOneAndDelete(*c.ctx, bson.D{{Key: "_id", Value: obj_id}})
	if err := result.Decode(dat); err != nil {
		if err == mongo.ErrNoDocuments {
			return nil, &errors.NoData{}
		}
		return nil, &errors.Unknown{Cause: &err}
	}
	return dat, nil
}
