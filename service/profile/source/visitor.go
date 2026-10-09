package source

import (
	"digital-portfolio/service/profile/database/model"
	"digital-portfolio/service/profile/http/client"
	"digital-portfolio/service/profile/types"
)

type Visitor struct {
	m  *model.Visitor
	ca *client.Auth
}

func NewVisitor(m *model.Visitor, ca *client.Auth) *Visitor {
	return &Visitor{m, ca}
}
func (c *Visitor) Count(p *types.ParamQueryVisitor) (*int64, error) {
	d, err := c.m.Count(p)
	return d, err
}
func (c *Visitor) All() (*[]types.Visitor, error) {
	d, err := c.m.All()
	return d, err
}
func (c *Visitor) Create(p *types.ParamCreateVisitor) (*types.Visitor, error) {
	d, err := c.m.Create(p)
	return d, err
}
func (c *Visitor) Find(id string) (*types.Visitor, error) {
	d, err := c.m.FindOneById(id)
	return d, err
}
func (c *Visitor) Update(id string, p *types.ParamUpdateVisitor) (*types.Visitor, error) {
	d, err := c.m.UpdateOneById(id, p)
	return d, err
}
func (c *Visitor) Delete(id string) (*types.Visitor, error) {
	d, err := c.m.DeleteOneById(id)
	return d, err
}
func (c *Visitor) Clear() (*[]types.Visitor, error) {
	d, err := c.m.DeleteAll()
	return d, err
}

// func (c *Visitor) FileUpload(p *types.FileUpload) (*string, error) {
// 	r := ""
// 	return &r, nil
// }
// func (c *Visitor) FileDownload(p *string) (*[]byte, error) {
// 	r := []byte{}
// 	return &r, nil
// }
