package endpoint

import (
	"digital-portfolio/service/account/errors"
	"digital-portfolio/service/account/source"
	"digital-portfolio/service/account/types"
	goerrors "errors"

	"github.com/gofiber/fiber/v2"
)

type Customer struct {
	s *source.Customer
}

func NewCustomer(s *source.Customer) *Customer {
	return &Customer{s}
}

func (e Customer) SignUp(c *fiber.Ctx) error {
	p := &types.ParamSignUp{}
	if err := c.BodyParser(p); err != nil {
		return e.ErrorParser(c)
	}
	d, s, err := e.s.SignUp(p)
	if err != nil {
		if goerrors.Is(err, &errors.BadParam{}) {
			return e.ErrorParam(c, err.(*errors.BadParam))
		}
		return e.ErrorEmpty(c)
	}
	c.Set("WWW-Authenticate", *s)
	return c.JSON(d)
}
func (e Customer) SignIn(c *fiber.Ctx) error {
	p := &types.ParamSignIn{}
	if err := c.BodyParser(p); err != nil {
		return e.ErrorParser(c)
	}
	d, s, err := e.s.SignIn(p)
	if err != nil {
		return e.ErrorEmpty(c)
	}
	c.Set("WWW-Authenticate", *s)
	return c.JSON(d)
}
func (e Customer) All(c *fiber.Ctx) error {
	d, err := e.s.All()
	if err != nil {
		return e.ErrorEmpty(c)
	}
	return c.JSON(d)
}
func (e Customer) Create(c *fiber.Ctx) error {
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
func (e Customer) Find(c *fiber.Ctx) error {
	d, err := e.s.Find(c.Params("id"))
	if err != nil {
		return e.ErrorEmpty(c)
	}
	return c.JSON(d)
}
func (e Customer) Update(c *fiber.Ctx) error {
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
func (e Customer) Delete(c *fiber.Ctx) error {
	d, err := e.s.Delete(c.Params("id"))
	if err != nil {
		return e.ErrorEmpty(c)
	}
	return c.JSON(d)
}
func (e Customer) Clear(c *fiber.Ctx) error {
	d, err := e.s.Clear()
	if err != nil {
		return e.ErrorEmpty(c)
	}
	return c.JSON(d)
}

func (e Customer) ErrorParam(c *fiber.Ctx, err *errors.BadParam) error {
	return c.Status(fiber.StatusBadRequest).JSON(err.Msg)
}
func (e Customer) ErrorEmpty(c *fiber.Ctx) error {
	return c.SendStatus(fiber.StatusNotFound)
}
func (e Customer) ErrorParser(c *fiber.Ctx) error {
	return c.SendStatus(fiber.StatusBadRequest)
}
