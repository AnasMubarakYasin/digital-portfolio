package client

import (
	"digital-portfolio/instance/types"

	"github.com/gofiber/fiber/v2"
)

type Env struct {
	Addr string
}

func NewEnv(addr string) *Env {
	if addr == "" {
		addr = types.InstanceAddress
	}
	return &Env{Addr: addr}
}

func (env *Env) Endpoint(name string) string {
	return "http://" + env.Addr + "/env/" + name
}

func (env *Env) All() (*[]types.Env, error) {
	agent := fiber.Get(env.Endpoint(""))
	if err := agent.Parse(); err != nil {
		return nil, err
	}
	data := &[]types.Env{}
	_, _, errs := agent.Struct(data)
	if len(errs) > 0 {
		return nil, errs[0]
	}
	return data, nil
}
func (env *Env) Get(key string) (*types.Env, error) {
	agent := fiber.Get(env.Endpoint(key))
	if err := agent.Parse(); err != nil {
		return nil, err
	}
	data := &types.Env{}
	_, _, errs := agent.Struct(data)
	if len(errs) > 0 {
		return nil, errs[0]
	}
	return data, nil
}
func (env *Env) Set(key string, value string) error {
	agent := fiber.Patch(env.Endpoint(key))
	agent.JSON(&types.ValueEnv{Value: value})
	if err := agent.Parse(); err != nil {
		return err
	}
	_, _, errs := agent.Bytes()
	if len(errs) > 0 {
		return errs[0]
	}
	return nil
}
func (env *Env) Create(key string, value string) (*types.Env, error) {
	agent := fiber.Post(env.Endpoint(key))
	agent.JSON(&types.Env{Key: key, Value: value})
	if err := agent.Parse(); err != nil {
		return nil, err
	}
	data := &types.Env{}
	_, _, errs := agent.Struct(data)
	if len(errs) > 0 {
		return nil, errs[0]
	}
	return data, nil
}
func (env *Env) Delete(key string) error {
	agent := fiber.Delete(env.Endpoint(key))
	if err := agent.Parse(); err != nil {
		return err
	}
	_, _, errs := agent.Bytes()
	if len(errs) > 0 {
		return errs[0]
	}
	return nil
}
func (env *Env) SetKey(key string, new_key string) error {
	agent := fiber.Patch(env.Endpoint(key))
	agent.JSON(&types.KeyEnv{Key: new_key})
	if err := agent.Parse(); err != nil {
		return err
	}
	_, _, errs := agent.Bytes()
	if len(errs) > 0 {
		return errs[0]
	}
	return nil
}
func (env *Env) Clear() error {
	agent := fiber.Delete(env.Endpoint(""))
	if err := agent.Parse(); err != nil {
		return err
	}
	_, _, errs := agent.Bytes()
	if len(errs) > 0 {
		return errs[0]
	}
	return nil
}
