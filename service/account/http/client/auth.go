package client

import (
	"digital-portfolio/auth/authc"
	"strings"

	"github.com/gofiber/fiber/v3/client"
)

type Auth struct {
	host string
	cl   *client.Client
}

func NewAuth(host string) *Auth {
	cl := client.New()
	return &Auth{host, cl}
}

func (c *Auth) Endpoint(names ...string) string {
	return "http://" + c.host + "/" + strings.Join(names, "/")
}

func (c *Auth) Gen(p *authc.ParamGen) (*string, error) {
	req := c.cl.R().SetURL(c.Endpoint("gen")).SetMethod("POST").SetJSON(p)
	res, err := req.Send()
	if err != nil {
		return nil, err
	}
	r := res.String()
	return &r, nil
}
