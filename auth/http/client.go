package http

import (
	"digital-portfolio/service/account/types"
	"strings"

	"github.com/gofiber/fiber/v3/client"
)

type Client struct {
	host string
	cl   *client.Client
}

func NewClient(uri string) *Client {
	cl := client.New()

	return &Client{uri, cl}
}
func (c *Client) Endpoint(names ...string) string {
	return "http://" + c.host + "/" + strings.Join(names, "/")
}
func (c *Client) Get(id string, t string) (*types.Account, error) {
	req := c.cl.R().SetURL(c.Endpoint(t, id)).SetMethod("GET")
	res, err := req.Send()
	if err != nil {
		return nil, err
	}
	data := &types.Account{}
	if err = res.JSON(data); err != nil {
		return nil, err
	}
	return data, nil
}
