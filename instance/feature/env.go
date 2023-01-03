package feature

import (
	"digital-portfolio/instance/database/model"
	"digital-portfolio/instance/types"
)

type Env struct {
	model *model.Env
}

func NewEnv(model *model.Env) *Env {
	return &Env{model: model}
}

func (env *Env) All() (*[]types.Env, error) {
	data, err := env.model.FindAll()
	if err != nil {
		return nil, err
	}
	return data, nil
}
func (env *Env) Get(key string) (*types.Env, error) {
	data, err := env.model.FindOne(&types.KeyEnv{Key: key})
	if err != nil {
		return nil, err
	}
	return data, nil
}
func (env *Env) Set(key string, value string) error {
	_, err := env.model.UpdateOne(types.ValueEnv{Value: key}, &types.ParamUpdateEnv{Value: value})
	return err
}
func (env *Env) Create(key string, value string) (*types.Env, error) {
	data, err := env.model.InsertOne(&types.ParamCreateEnv{Key: key, Value: value})
	return data, err
}
func (env *Env) Delete(key string) error {
	_, err := env.model.DeleteOne(&types.KeyEnv{Key: key})
	return err
}
func (env *Env) SetKey(key string, new_key string) error {
	_, err := env.model.UpdateOne(&types.KeyEnv{Key: key}, &types.ParamUpdateEnv{Key: new_key})
	return err
}
func (env *Env) Clear() error {
	_, err := env.model.DeleteAll()
	return err
}
