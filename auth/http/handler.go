package http

import (
	"digital-portfolio/auth/authc"
	"errors"
	"strings"

	"github.com/gofiber/fiber/v2"
)

type Handler struct {
	a *authc.Authc
}

func NewHandler(a *authc.Authc) *Handler {
	return &Handler{a}
}
func (h *Handler) Auth(c *fiber.Ctx) error {
	a := c.Get(fiber.HeaderAuthorization, "")
	if a == "" {
		h.a.LogErr(errors.New("empty Authorization Header"))
		return c.SendStatus(fiber.StatusUnauthorized)
	}
	t := strings.Split(a, " ")[1]
	if t == "" {
		h.a.LogErr(errors.New("empty Bearer or Token"))
		return c.SendStatus(fiber.StatusUnauthorized)
	}
	_, err := h.a.Authenticate(t)
	if err != nil {
		h.a.LogErr(err)
		return c.SendStatus(fiber.StatusUnauthorized)
	}
	return c.SendStatus(200)
}
func (h *Handler) Gen(c *fiber.Ctx) error {
	p := &authc.ParamGen{}
	if err := c.BodyParser(p); err != nil {
		h.a.LogErr(err)
		return c.SendStatus(fiber.StatusBadRequest)
	}
	s, err := h.a.Generate(p)
	if err != nil {
		h.a.LogErr(err)
		return c.SendStatus(fiber.StatusBadRequest)
	}
	return c.SendString(s)
}
