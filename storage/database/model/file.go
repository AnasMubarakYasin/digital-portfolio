package model

import (
	"context"
	"digital-portfolio/storage/database"
	"digital-portfolio/storage/errors"
	"digital-portfolio/storage/types"
	"log"

	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/bson/primitive"
	"go.mongodb.org/mongo-driver/mongo"
)

type File struct {
	db   *database.Database
	ctx  *context.Context
	coll *mongo.Collection
}

func NewFile(d *database.Database) *File {
	coll := d.Db.Collection("Files")
	if coll == nil {
		log.Fatal("Database not yet connected")
	}
	ctx := context.TODO()
	return &File{d, &ctx, coll}
}
func (c *File) All() (*[]types.File, error) {
	dat := &[]types.File{}
	cur, err := c.coll.Find(*c.ctx, bson.D{})
	if err != nil {
		return nil, &errors.Unknown{Cause: &err}
	}
	cur.All(*c.ctx, dat)
	return dat, nil
}
func (c *File) Create(p *types.ParamCreate) (*types.File, error) {
	result, err := c.coll.InsertOne(*c.ctx, &p)
	if err != nil {
		return nil, &errors.Unknown{Cause: &err}
	}
	dat := &types.File{}
	if err := c.coll.FindOne(*c.ctx, bson.D{{Key: "_id", Value: result.InsertedID}}).Decode(dat); err != nil {
		if err == mongo.ErrNoDocuments {
			return nil, &errors.NoData{}
		}
		return nil, &errors.Unknown{Cause: &err}
	}
	return dat, nil
}
func (c *File) FindOne(filter interface{}) (*types.File, error) {
	dat := &types.File{}
	if err := c.coll.FindOne(*c.ctx, filter).Decode(dat); err != nil {
		if err == mongo.ErrNoDocuments {
			return nil, &errors.NoData{}
		}
		return nil, &errors.Unknown{Cause: &err}
	}
	return dat, nil
}
func (c *File) FindOneById(id string) (*types.File, error) {
	dat := &types.File{}
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
func (c *File) UpdateOneById(id string, p *types.ParamUpdate) (*types.File, error) {
	obj_id, err := primitive.ObjectIDFromHex(id)
	if err != nil {
		if err == mongo.ErrNoDocuments {
			return nil, &errors.NoData{}
		}
		return nil, &errors.Unknown{Cause: &err}
	}
	dat := &types.File{}
	result := c.coll.FindOneAndUpdate(*c.ctx, bson.D{{Key: "_id", Value: obj_id}}, bson.D{{Key: "$set", Value: p}})
	if err := result.Decode(dat); err != nil {
		if err == mongo.ErrNoDocuments {
			return nil, &errors.NoData{}
		}
		return nil, &errors.Unknown{Cause: &err}
	}
	return dat, nil
}
func (c *File) DeleteOneById(id string) (*types.File, error) {
	obj_id, err := primitive.ObjectIDFromHex(id)
	if err != nil {
		return nil, &errors.Unknown{Cause: &err}
	}
	dat := &types.File{}
	result := c.coll.FindOneAndDelete(*c.ctx, bson.D{{Key: "_id", Value: obj_id}})
	if err := result.Decode(dat); err != nil {
		if err == mongo.ErrNoDocuments {
			return nil, &errors.NoData{}
		}
		return nil, &errors.Unknown{Cause: &err}
	}
	return dat, nil
}
func (c *File) DeleteAll() (*[]types.File, error) {
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
