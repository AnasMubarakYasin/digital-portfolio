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

type Application struct {
	ID      string   `json:"id,omitempty" bson:"_id,omitempty" xml:"id,omitempty" form:"id,omitempty"`
	PID     string   `json:"pid,omitempty" bson:"pid,omitempty" xml:"pid,omitempty" form:"pid,omitempty"`
	Path    string   `json:"path,omitempty" bson:"path,omitempty" xml:"path,omitempty" form:"path,omitempty"`
	Name    string   `json:"name,omitempty" bson:"name,omitempty" xml:"name,omitempty" form:"name,omitempty"`
	Status  string   `json:"status,omitempty" bson:"status,omitempty" xml:"status,omitempty" form:"status,omitempty"`
	Servers []Server `json:"servers,omitempty" bson:"servers,omitempty" xml:"servers,omitempty" form:"servers,omitempty"`
}
type Server struct {
	ID      string `json:"id,omitempty" bson:"_id,omitempty" xml:"id,omitempty" form:"id,omitempty"`
	Address string `json:"address,omitempty" bson:"address,omitempty" xml:"address,omitempty" form:"address,omitempty"`
	Status  string `json:"status,omitempty" bson:"status,omitempty" xml:"status,omitempty" form:"status,omitempty"`
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
