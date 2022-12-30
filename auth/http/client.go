package http

import (
	"golokal/service/account/types"

	"github.com/gofiber/fiber/v2"
)

type Client struct {
	uri string
}

func NewClient(uri string) *Client {
	return &Client{uri}
}

func (c *Client) Get(id string, t string) (*types.Account, error) {
	a := fiber.Get("http://" + c.uri + "/" + t + "/" + id)
	if err := a.Parse(); err != nil {
		return nil, err
	}
	dat := &types.Account{}
	_, _, errs := a.Struct(dat)
	if len(errs) > 0 {
		return nil, errs[0]
	}
	return dat, nil
}
