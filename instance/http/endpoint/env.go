package endpoint

import (
	"golokal/instance/feature"
	"golokal/instance/types"

	"github.com/gofiber/fiber/v2"
)

type Env struct {
	Feature *feature.Env
}

func NewEnv(env *feature.Env) *Env {
	return &Env{Feature: env}
}

func (env *Env) All(ctx *fiber.Ctx) error {
	data, err := env.Feature.All()
	if err != nil {
		return env.Error(ctx, err)
	}
	return env.Ok(ctx, data)
}
func (env *Env) Get(ctx *fiber.Ctx) error {
	data, err := env.Feature.Get(string(ctx.Params("key")))
	if err != nil {
		return env.Error(ctx, err)
	}
	return env.Ok(ctx, data)
}
func (env *Env) Set(ctx *fiber.Ctx) error {
	body := &types.ValueEnv{}
	if err := ctx.BodyParser(body); err != nil {
		return env.Error(ctx, err)
	}
	if err := env.Feature.Set(ctx.Params("key"), body.Value); err != nil {
		return env.Error(ctx, err)
	}
	return env.Ok(ctx, nil)
}
func (env *Env) Create(ctx *fiber.Ctx) error {
	body := &types.Env{}
	if err := ctx.BodyParser(body); err != nil {
		return env.Error(ctx, err)
	}
	data, err := env.Feature.Create(body.Key, body.Value)
	if err != nil {
		return env.Error(ctx, err)
	}
	return env.Created(ctx, data)
}
func (env *Env) Delete(ctx *fiber.Ctx) error {
	body := &types.KeyEnv{}
	if err := ctx.BodyParser(body); err != nil {
		return env.Error(ctx, err)
	}
	if err := env.Feature.Delete(body.Key); err != nil {
		return env.Error(ctx, err)
	}
	return env.Ok(ctx, nil)
}
func (env *Env) SetKey(ctx *fiber.Ctx) error {
	body := &types.KeyEnv{}
	if err := ctx.BodyParser(body); err != nil {
		return env.Error(ctx, err)
	}
	if err := env.Feature.SetKey(ctx.Params("key"), body.Key); err != nil {
		return env.Error(ctx, err)
	}
	return env.Ok(ctx, nil)
}
func (env *Env) Clear(ctx *fiber.Ctx) error {
	if err := env.Feature.Clear(); err != nil {
		return env.Error(ctx, err)
	}
	return env.Ok(ctx, nil)
}

func (env *Env) Ok(ctx *fiber.Ctx, data any) error {
	return ctx.Status(fiber.StatusOK).JSON(data)
}
func (env *Env) Created(ctx *fiber.Ctx, data any) error {
	return ctx.Status(fiber.StatusCreated).JSON(data)
}
func (env *Env) Error(ctx *fiber.Ctx, err error) error {
	return ctx.Status(fiber.StatusInternalServerError).JSON(err)
}
