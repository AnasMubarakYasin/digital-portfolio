package types

import "time"

type Visitor struct {
	ID        string    `json:"id,omitempty" bson:"_id,omitempty" xml:"id,omitempty" form:"id,omitempty"`
	ProfileID string    `json:"profile_id,omitempty" bson:"profile_id,omitempty" xml:"profile_id,omitempty" form:"profile_id,omitempty"`
	IP        string    `json:"ip" bson:"ip" xml:"ip" form:"ip"`
	Date      time.Time `json:"date" bson:"date" xml:"date" form:"date"`
}

type ParamQueryVisitor struct {
	ProfileID string    `json:"profile_id,omitempty" bson:"profile_id,omitempty" xml:"profile_id,omitempty" form:"profile_id,omitempty"`
	IP        string    `json:"ip,omitempty" bson:"ip,omitempty" xml:"ip,omitempty" form:"ip,omitempty"`
	Date      time.Time `json:"date,omitempty" bson:"date,omitempty" xml:"date,omitempty" form:"date,omitempty"`
}
type ParamCreateVisitor struct {
	ProfileID string    `json:"profile_id" bson:"profile_id" xml:"profile_id" form:"profile_id"`
	IP        string    `json:"ip" bson:"ip" xml:"ip" form:"ip"`
	Date      time.Time `json:"date" bson:"date" xml:"date" form:"date"`
}
type ParamUpdateVisitor struct {
	ProfileID string    `json:"profile_id,omitempty" bson:"profile_id,omitempty" xml:"profile_id,omitempty" form:"profile_id,omitempty"`
	IP        string    `json:"ip,omitempty" bson:"ip,omitempty" xml:"ip,omitempty" form:"ip,omitempty"`
	Date      time.Time `json:"date,omitempty" bson:"date,omitempty" xml:"date,omitempty" form:"date,omitempty"`
}
