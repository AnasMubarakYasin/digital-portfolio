package client

import (
	"strings"

	"github.com/gofiber/fiber/v3/client"
)

type Storage struct {
	host string
	cl   *client.Client
}

func NewStorage(host string) *Storage {
	cl := client.New()
	return &Storage{host, cl}
}

func (c *Storage) Endpoint(names ...string) string {
	return "http://" + c.host + "/" + strings.Join(names, "/")
}
