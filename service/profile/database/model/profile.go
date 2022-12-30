package model

import (
	"context"
	"golokal/service/profile/database"
	"golokal/service/profile/errors"
	"golokal/service/profile/types"
	"log"

	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/bson/primitive"
	"go.mongodb.org/mongo-driver/mongo"
)

type Profile struct {
	db   *database.Database
	ctx  *context.Context
	coll *mongo.Collection
}

func NewProfile(d *database.Database) *Profile {
	coll := d.Db.Collection("profiles")
	if coll == nil {
		log.Fatal("Database not yet connected")
	}
	ctx := context.TODO()
	return &Profile{d, &ctx, coll}
}
func (c *Profile) All() (*[]types.Profile, error) {
	dat := &[]types.Profile{}
	cur, err := c.coll.Find(*c.ctx, bson.D{})
	if err != nil {
		return nil, &errors.Unknown{Cause: &err}
	}
	cur.All(*c.ctx, dat)
	return dat, nil
}
func (c *Profile) Create(p *types.ParamCreate) (*types.Profile, error) {
	result, err := c.coll.InsertOne(*c.ctx, &p)
	if err != nil {
		return nil, &errors.Unknown{Cause: &err}
	}
	dat := &types.Profile{}
	if err := c.coll.FindOne(*c.ctx, bson.D{{Key: "_id", Value: result.InsertedID}}).Decode(dat); err != nil {
		if err == mongo.ErrNoDocuments {
			return nil, &errors.NoData{}
		}
		return nil, &errors.Unknown{Cause: &err}
	}
	return dat, nil
}
func (c *Profile) FindOne(filter interface{}) (*types.Profile, error) {
	dat := &types.Profile{}
	if err := c.coll.FindOne(*c.ctx, filter).Decode(dat); err != nil {
		if err == mongo.ErrNoDocuments {
			return nil, &errors.NoData{}
		}
		return nil, &errors.Unknown{Cause: &err}
	}
	return dat, nil
}
func (c *Profile) FindOneById(id string) (*types.Profile, error) {
	dat := &types.Profile{}
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
func (c *Profile) UpdateOneById(id string, p *types.ParamUpdate) (*types.Profile, error) {
	obj_id, err := primitive.ObjectIDFromHex(id)
	if err != nil {
		if err == mongo.ErrNoDocuments {
			return nil, &errors.NoData{}
		}
		return nil, &errors.Unknown{Cause: &err}
	}
	dat := &types.Profile{}
	result := c.coll.FindOneAndUpdate(*c.ctx, bson.D{{Key: "_id", Value: obj_id}}, bson.D{{Key: "$set", Value: p}})
	if err := result.Decode(dat); err != nil {
		if err == mongo.ErrNoDocuments {
			return nil, &errors.NoData{}
		}
		return nil, &errors.Unknown{Cause: &err}
	}
	return dat, nil
}
func (c *Profile) DeleteOneById(id string) (*types.Profile, error) {
	obj_id, err := primitive.ObjectIDFromHex(id)
	if err != nil {
		return nil, &errors.Unknown{Cause: &err}
	}
	dat := &types.Profile{}
	result := c.coll.FindOneAndDelete(*c.ctx, bson.D{{Key: "_id", Value: obj_id}})
	if err := result.Decode(dat); err != nil {
		if err == mongo.ErrNoDocuments {
			return nil, &errors.NoData{}
		}
		return nil, &errors.Unknown{Cause: &err}
	}
	return dat, nil
}
func (c *Profile) DeleteAll() (*[]types.Profile, error) {
	dat, err := c.All()
	if err != nil {
		return nil, &errors.Unknown{Cause: &err}
	}
	_, err = c.coll.DeleteMany(*c.ctx, bson.D{})
	if err != nil {
		return nil, &errors.Unknown{Cause: &err}
	}
	return dat, nil
}
