package client

import (
	"digital-portfolio/service/profile/types"

	"github.com/gofiber/fiber/v2"
)

type Profile struct {
	Addr string
}

func NewProfile(addr string) *Profile {
	return &Profile{addr}
}

func (c *Profile) Create(name string) (*types.Profile, error) {
	p := &types.ParamCreate{
		Name:               name,
		ActivePositions:    []types.ActivePosition{},
		Certificates:       []types.Certificate{},
		Experiences:        []types.Experience{},
		Languages:          []types.Language{},
		PreferredPositions: []types.PreferredPosition{},
		Projects:           []types.Project{},
		Skills:             []types.Skill{},
	}
	a := fiber.Post("http://" + c.Addr + "/")
	a.JSON(p)
	if err := a.Parse(); err != nil {
		return nil, err
	}
	d := &types.Profile{}
	_, _, errs := a.Struct(d)
	if len(errs) > 0 {
		return nil, errs[0]
	}
	return d, nil
}
