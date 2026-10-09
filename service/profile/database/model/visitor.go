package model

import (
	"context"
	"digital-portfolio/service/profile/database"
	"digital-portfolio/service/profile/errors"
	"digital-portfolio/service/profile/types"
	"log"

	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/bson/primitive"
	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
)

type Visitor struct {
	db   *database.Database
	ctx  *context.Context
	coll *mongo.Collection
}

func NewVisitor(d *database.Database) *Visitor {
	coll := d.Db.Collection("visitors")
	if coll == nil {
		log.Fatal("Database not yet connected")
	}
	ctx := context.TODO()
	return &Visitor{d, &ctx, coll}
}
func (c *Visitor) Count(p *types.ParamQueryVisitor) (*int64, error) {
	filter := bson.D{}
	if len(p.ProfileID) == 24 {
		obj_id, err := primitive.ObjectIDFromHex(p.ProfileID)
		if err != nil {
			return nil, &errors.Unknown{Cause: &err}
		}
		filter = append(filter, bson.E{Key: "profile_id", Value: obj_id})
	}
	if len(p.IP) > 0 {
		filter = append(filter, bson.E{Key: "ip", Value: p.IP})
	}
	if !p.Date.IsZero() {
		filter = append(filter, bson.E{Key: "ip", Value: p.IP})
	}
	dat, err := c.coll.CountDocuments(*c.ctx, filter)
	if err != nil {
		return nil, &errors.Unknown{Cause: &err}
	}
	return &dat, nil
}
func (c *Visitor) All() (*[]types.Visitor, error) {
	dat := &[]types.Visitor{}
	cur, err := c.coll.Find(*c.ctx, bson.D{})
	if err != nil {
		return nil, &errors.Unknown{Cause: &err}
	}
	cur.All(*c.ctx, dat)
	return dat, nil
}
func (c *Visitor) Create(p *types.ParamCreateVisitor) (*types.Visitor, error) {
	result, err := c.coll.InsertOne(*c.ctx, &p)
	if err != nil {
		return nil, &errors.Unknown{Cause: &err}
	}
	dat := &types.Visitor{}
	if err := c.coll.FindOne(*c.ctx, bson.D{{Key: "_id", Value: result.InsertedID}}).Decode(dat); err != nil {
		if err == mongo.ErrNoDocuments {
			return nil, &errors.NoData{}
		}
		return nil, &errors.Unknown{Cause: &err}
	}
	return dat, nil
}
func (c *Visitor) FindOne(filter interface{}) (*types.Visitor, error) {
	dat := &types.Visitor{}
	if err := c.coll.FindOne(*c.ctx, filter).Decode(dat); err != nil {
		if err == mongo.ErrNoDocuments {
			return nil, &errors.NoData{}
		}
		return nil, &errors.Unknown{Cause: &err}
	}
	return dat, nil
}
func (c *Visitor) FindOneById(id string) (*types.Visitor, error) {
	dat := &types.Visitor{}
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
func (c *Visitor) UpdateInsert(p *types.ParamCreateVisitor) (*types.Visitor, error) {
	obj_id, err := primitive.ObjectIDFromHex(p.ProfileID)
	if err != nil {
		if err == mongo.ErrNoDocuments {
			return nil, &errors.NoData{}
		}
		return nil, &errors.Unknown{Cause: &err}
	}
	dat := &types.Visitor{}
	opts := options.FindOneAndUpdate().SetUpsert(true)
	result := c.coll.FindOneAndUpdate(*c.ctx, bson.D{{Key: "profile_id", Value: obj_id}, {Key: "ip", Value: p.IP}}, bson.D{{Key: "$set", Value: bson.D{{Key: "profile_id", Value: obj_id}, {Key: "ip", Value: p.IP}, {Key: "date", Value: p.Date}}}}, opts)
	if err := result.Decode(dat); err != nil {
		return nil, &errors.Unknown{Cause: &err}
	}
	return dat, nil
}
func (c *Visitor) UpdateOneById(id string, p *types.ParamUpdateVisitor) (*types.Visitor, error) {
	obj_id, err := primitive.ObjectIDFromHex(id)
	if err != nil {
		if err == mongo.ErrNoDocuments {
			return nil, &errors.NoData{}
		}
		return nil, &errors.Unknown{Cause: &err}
	}
	dat := &types.Visitor{}
	result := c.coll.FindOneAndUpdate(*c.ctx, bson.D{{Key: "_id", Value: obj_id}}, bson.D{{Key: "$set", Value: p}})
	if err := result.Decode(dat); err != nil {
		if err == mongo.ErrNoDocuments {
			return nil, &errors.NoData{}
		}
		return nil, &errors.Unknown{Cause: &err}
	}
	return dat, nil
}
func (c *Visitor) DeleteOneById(id string) (*types.Visitor, error) {
	obj_id, err := primitive.ObjectIDFromHex(id)
	if err != nil {
		return nil, &errors.Unknown{Cause: &err}
	}
	dat := &types.Visitor{}
	result := c.coll.FindOneAndDelete(*c.ctx, bson.D{{Key: "_id", Value: obj_id}})
	if err := result.Decode(dat); err != nil {
		if err == mongo.ErrNoDocuments {
			return nil, &errors.NoData{}
		}
		return nil, &errors.Unknown{Cause: &err}
	}
	return dat, nil
}
func (c *Visitor) DeleteAll() (*[]types.Visitor, error) {
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
