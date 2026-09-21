package client

import (
	"digital-portfolio/instance/types"
	"strings"

	"github.com/gofiber/fiber/v3/client"
)

type Env struct {
	host string
	cl   *client.Client
}

func NewEnv(host string) *Env {
	if host == "" {
		// TODO - you should not use types constant instead use env HTTP_ADDR
		host = types.InstanceAddress
	}
	cl := client.New()
	return &Env{host, cl}
}

func (env *Env) Endpoint(names ...string) string {
	return "http://" + env.host + "/env/" + strings.Join(names, "/")
}

func (env *Env) All() (*[]types.Env, error) {
	req := env.cl.R().SetURL(env.Endpoint()).SetMethod("GET")
	res, err := req.Send()
	if err != nil {
		return nil, err
	}
	data := &[]types.Env{}
	if err = res.JSON(data); err != nil {
		return nil, err
	}
	return data, nil
}
func (env *Env) Get(key string) (*types.Env, error) {
	req := env.cl.R().SetURL(env.Endpoint(key)).SetMethod("GET")
	res, err := req.Send()
	if err != nil {
		return nil, err
	}
	data := &types.Env{}
	if err = res.JSON(data); err != nil {
		return nil, err
	}
	return data, nil
}
func (env *Env) Set(key string, value string) error {
	req := env.cl.R().SetURL(env.Endpoint(key)).SetMethod("PATCH").SetJSON(&types.ValueEnv{Value: value})
	_, err := req.Send()
	if err != nil {
		return err
	}
	return nil
}
func (env *Env) Create(key string, value string) (*types.Env, error) {
	req := env.cl.R().SetURL(env.Endpoint()).SetMethod("POST").SetJSON(&types.Env{Key: key, Value: value})
	res, err := req.Send()
	if err != nil {
		return nil, err
	}
	data := &types.Env{}
	if err = res.JSON(data); err != nil {
		return nil, err
	}
	return data, nil
}
func (env *Env) Delete(key string) error {
	req := env.cl.R().SetURL(env.Endpoint(key)).SetMethod("DELETE")
	_, err := req.Send()
	if err != nil {
		return err
	}
	return nil
}
func (env *Env) SetKey(key string, new_key string) error {
	req := env.cl.R().SetURL(env.Endpoint(key, "key")).SetMethod("PATCH").SetJSON(&types.KeyEnv{Key: new_key})
	_, err := req.Send()
	if err != nil {
		return err
	}
	return nil
}
func (env *Env) Clear() error {
	req := env.cl.R().SetURL(env.Endpoint()).SetMethod("DELETE")
	_, err := req.Send()
	if err != nil {
		return err
	}
	return nil
}
