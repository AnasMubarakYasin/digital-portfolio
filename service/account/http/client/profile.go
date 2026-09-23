package client

import (
	"digital-portfolio/service/profile/types"
	"strings"

	"github.com/gofiber/fiber/v3/client"
)

type Profile struct {
	host string
	cl   *client.Client
}

func NewProfile(host string) *Profile {
	cl := client.New()

	return &Profile{host, cl}
}

func (c *Profile) Endpoint(names ...string) string {
	return "http://" + c.host + "/" + strings.Join(names, "/")
}

func (c *Profile) Create(name string) (*types.Profile, error) {
	p := &types.ParamCreate{
		Name:               name,
		ActivePositions:    []types.ActivePosition{},
		Certificates:       []types.Certificate{},
		Educations:         []types.Education{},
		Experiences:        []types.Experience{},
		Languages:          []types.Language{},
		PreferredPositions: []types.PreferredPosition{},
		Projects:           []types.Project{},
		Skills:             []types.Skill{},
	}
	req := c.cl.R().SetURL(c.Endpoint("gen")).SetMethod("POST").SetJSON(p)
	res, err := req.Send()
	if err != nil {
		return nil, err
	}
	d := &types.Profile{}
	if err = res.JSON(d); err != nil {
		return nil, err
	}
	return d, nil
}
