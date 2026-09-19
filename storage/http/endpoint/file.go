package endpoint

import (
	"bufio"
	"digital-portfolio/storage/errors"
	"digital-portfolio/storage/source"
	"digital-portfolio/storage/types"
	"log"
	"strconv"

	"github.com/gofiber/fiber/v2"
)

type File struct {
	s *source.File
}

func NewFile(s *source.File) *File {
	return &File{s}
}

func (e *File) Upload(c *fiber.Ctx) error {
	hr := &struct {
		Type string `reqHeader:"content-type"`
		Size int    `reqHeader:"content-length"`
	}{}
	if err := c.ReqHeaderParser(hr); err != nil {
		return SendError(c, err)
	}
	p := &types.ParamCreate{
		Path: c.Params("+"),
		Type: hr.Type,
		Size: hr.Size,
	}
	d, err := e.s.Upload(p, bufio.NewReader(c.Request().BodyStream()))
	if err != nil {
		return SendError(c, err)
	}
	c.Set("Content-Type", "text/plain")
	c.Set("Content-Length", strconv.Itoa(len(d)))
	return c.SendString(d)
}
func (e *File) Download(c *fiber.Ctx) error {
	d, err := e.s.Download(c.Params("+"), bufio.NewWriter(c.Response().BodyWriter()))
	if err != nil {
		return SendError(c, err)
	}
	c.Set("Content-Type", d.Type)
	c.Set("Content-Length", strconv.Itoa(d.Size))
	return err
}

func (e *File) All(c *fiber.Ctx) error {
	d, err := e.s.All()
	if err != nil {
		return e.ErrorEmpty(c)
	}
	return c.JSON(d)
}
func (e *File) Create(c *fiber.Ctx) error {
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
func (e *File) Find(c *fiber.Ctx) error {
	d, err := e.s.Find(c.Params("id"))
	if err != nil {
		return e.ErrorEmpty(c)
	}
	return c.JSON(d)
}
func (e *File) Update(c *fiber.Ctx) error {
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
func (e *File) Delete(c *fiber.Ctx) error {
	d, err := e.s.Delete(c.Params("id"))
	if err != nil {
		return e.ErrorEmpty(c)
	}
	return c.JSON(d)
}
func (e *File) Clear(c *fiber.Ctx) error {
	d, err := e.s.Clear()
	if err != nil {
		return e.ErrorEmpty(c)
	}
	return c.JSON(d)
}

func (e *File) ErrorParam(c *fiber.Ctx, err *errors.BadParam) error {
	return c.Status(fiber.StatusBadRequest).JSON(err.Msg)
}
func (e *File) ErrorEmpty(c *fiber.Ctx) error {
	return c.SendStatus(fiber.StatusNotFound)
}
func (e *File) ErrorParser(c *fiber.Ctx) error {
	return c.SendStatus(fiber.StatusBadRequest)
}
func SendError(c *fiber.Ctx, err error) error {
	log.Printf("error: %+v\n", err)
	m := err.Error()
	c.Set("Content-Type", "text/plain")
	c.Set("Content-Length", strconv.Itoa(len(m)))
	return c.Status(fiber.StatusInternalServerError).SendString(m)
}
