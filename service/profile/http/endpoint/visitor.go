package endpoint

import (
	"digital-portfolio/service/profile/source"
	"digital-portfolio/service/profile/types"

	"github.com/gofiber/fiber/v3"
)

type Visitor struct {
	s *source.Visitor
}

func NewVisitor(s *source.Visitor) *Visitor {
	return &Visitor{s}
}
func (e Visitor) Count(c fiber.Ctx) error {
	p := &types.ParamQueryVisitor{}
	if err := c.Bind().Body(p); err != nil {
		return e.ErrorParser(c)
	}
	d, err := e.s.Count(p)
	if err != nil {
		return e.ErrorEmpty(c)
	}
	return c.JSON(d)
}
func (e Visitor) All(c fiber.Ctx) error {
	d, err := e.s.All()
	if err != nil {
		return e.ErrorEmpty(c)
	}
	return c.JSON(d)
}
func (e Visitor) Create(c fiber.Ctx) error {
	p := &types.ParamCreateVisitor{}
	if err := c.Bind().Body(p); err != nil {
		return e.ErrorParser(c)
	}
	d, err := e.s.Create(p)
	if err != nil {
		return e.ErrorEmpty(c)
	}
	return c.JSON(d)
}
func (e Visitor) Find(c fiber.Ctx) error {
	d, err := e.s.Find(c.Params("id"))
	if err != nil {
		return e.ErrorEmpty(c)
	}
	return c.JSON(d)
}
func (e Visitor) Update(c fiber.Ctx) error {
	p := &types.ParamUpdateVisitor{}
	if err := c.Bind().Body(p); err != nil {
		return e.ErrorParser(c)
	}
	d, err := e.s.Update(c.Params("id"), p)
	if err != nil {
		return e.ErrorEmpty(c)
	}
	return c.JSON(d)
}
func (e Visitor) Delete(c fiber.Ctx) error {
	d, err := e.s.Delete(c.Params("id"))
	if err != nil {
		return e.ErrorEmpty(c)
	}
	return c.JSON(d)
}
func (e Visitor) Clear(c fiber.Ctx) error {
	d, err := e.s.Clear()
	if err != nil {
		return e.ErrorEmpty(c)
	}
	return c.JSON(d)
}

func (e Visitor) ErrorEmpty(c fiber.Ctx) error {
	return c.SendStatus(fiber.StatusNotFound)
}
func (e Visitor) ErrorParser(c fiber.Ctx) error {
	return c.SendStatus(fiber.StatusBadRequest)
}
