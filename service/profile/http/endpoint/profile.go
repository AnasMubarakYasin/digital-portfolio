package endpoint

import (
	"digital-portfolio/service/profile/source"
	"digital-portfolio/service/profile/types"
	"net/url"

	"github.com/gofiber/fiber/v2"
)

type Profile struct {
	s *source.Profile
}

func NewProfile(s *source.Profile) *Profile {
	return &Profile{s}
}
func (e Profile) Show(c *fiber.Ctx) error {
	n, err := url.QueryUnescape(c.Params("name"))
	if err != nil {
		return e.ErrorEmpty(c)
	}
	d, err := e.s.Show(n)
	if err != nil {
		return e.ErrorEmpty(c)
	}
	return c.JSON(d)
}
func (e Profile) All(c *fiber.Ctx) error {
	d, err := e.s.All()
	if err != nil {
		return e.ErrorEmpty(c)
	}
	return c.JSON(d)
}
func (e Profile) Create(c *fiber.Ctx) error {
	p := &types.ParamCreate{}
	if err := c.BodyParser(p); err != nil {
		return e.ErrorParser(c)
	}
	d, err := e.s.Create(p)
	if err != nil {
		return e.ErrorEmpty(c)
	}
	return c.JSON(d)
}
func (e Profile) Find(c *fiber.Ctx) error {
	d, err := e.s.Find(c.Params("id"))
	if err != nil {
		return e.ErrorEmpty(c)
	}
	return c.JSON(d)
}
func (e Profile) Update(c *fiber.Ctx) error {
	p := &types.ParamUpdate{}
	if err := c.BodyParser(p); err != nil {
		return e.ErrorParser(c)
	}
	d, err := e.s.Update(c.Params("id"), p)
	if err != nil {
		return e.ErrorEmpty(c)
	}
	return c.JSON(d)
}
func (e Profile) Delete(c *fiber.Ctx) error {
	d, err := e.s.Delete(c.Params("id"))
	if err != nil {
		return e.ErrorEmpty(c)
	}
	return c.JSON(d)
}
func (e Profile) Clear(c *fiber.Ctx) error {
	d, err := e.s.Clear()
	if err != nil {
		return e.ErrorEmpty(c)
	}
	return c.JSON(d)
}

func (e Profile) ErrorEmpty(c *fiber.Ctx) error {
	return c.SendStatus(fiber.StatusNotFound)
}
func (e Profile) ErrorParser(c *fiber.Ctx) error {
	return c.SendStatus(fiber.StatusBadRequest)
}
