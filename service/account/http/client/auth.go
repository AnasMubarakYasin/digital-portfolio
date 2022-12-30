package client

import (
	"golokal/auth/authc"

	"github.com/gofiber/fiber/v2"
)

type Auth struct {
	Addr string
}

func NewAuth(addr string) *Auth {
	return &Auth{addr}
}

func (c *Auth) Gen(p *authc.ParamGen) (*string, error) {
	a := fiber.Post("http://" + c.Addr + "/gen")
	a.JSON(p)
	if err := a.Parse(); err != nil {
		return nil, err
	}
	_, b, errs := a.String()
	if len(errs) > 0 {
		return nil, errs[0]
	}
	return &b, nil
}
