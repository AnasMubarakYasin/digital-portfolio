package types

import "time"

const (
	InstanceAddress = "localhost:5010"
)

type LogData struct {
	Name   string    `json:"name" bson:"_name" xml:"name" form:"name"`
	Status string    `json:"status" bson:"status" xml:"status" form:"status"`
	Time   time.Time `json:"time" bson:"time" xml:"time" form:"time"`
}

type Env struct {
	ID    string `json:"id,omitempty" bson:"_id,omitempty" xml:"id,omitempty" form:"id,omitempty"`
	Key   string `json:"key" bson:"key" xml:"key" form:"key"`
	Value string `json:"value" bson:"value" xml:"value" form:"value"`
}
type KeyEnv struct {
	Key string `json:"key" bson:"key" xml:"key" form:"key"`
}
type ValueEnv struct {
	Value string `json:"value" bson:"value" xml:"value" form:"value"`
}

type Server struct {
	ID     string `json:"id,omitempty" bson:"_id,omitempty" xml:"id,omitempty" form:"id,omitempty"`
	Name   string `json:"name,omitempty" bson:"name,omitempty" xml:"name,omitempty" form:"name,omitempty"`
	Addr   string `json:"addr,omitempty" bson:"addr,omitempty" xml:"addr,omitempty" form:"addr,omitempty"`
	Status string `json:"status,omitempty" bson:"status,omitempty" xml:"status,omitempty" form:"status,omitempty"`
}

type ParamCreateEnv struct {
	Key   string `json:"key" bson:"key" xml:"key" form:"key"`
	Value string `json:"value" bson:"value" xml:"value" form:"value"`
}
type ParamUpdateEnv struct {
	Key   string `json:"key,omitempty" bson:"key,omitempty" xml:"key,omitempty" form:"key,omitempty"`
	Value string `json:"value,omitempty" bson:"value,omitempty" xml:"value,omitempty" form:"value,omitempty"`
}

type WebsocketMessage struct {
	Name     string `json:"name" bson:"name" xml:"name" form:"name"`
	Param    any    `json:"param,omitempty" bson:"param,omitempty" xml:"param,omitempty" form:"param,omitempty"`
	ParamSet LogData
}
