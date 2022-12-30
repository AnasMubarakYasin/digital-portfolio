package source

import (
	"golokal/service/profile/database/model"
	"golokal/service/profile/http/client"
	"golokal/service/profile/types"
)

type Profile struct {
	m  *model.Profile
	ca *client.Auth
}

func NewProfile(m *model.Profile, ca *client.Auth) *Profile {
	return &Profile{m, ca}
}
func (c *Profile) Show(name string) (*types.Profile, error) {
	d, err := c.m.FindOne(struct {
		Name string `json:"name" bson:"name" xml:"name" form:"name"`
	}{Name: name})
	return d, err
}
func (c *Profile) All() (*[]types.Profile, error) {
	d, err := c.m.All()
	return d, err
}
func (c *Profile) Create(p *types.ParamCreate) (*types.Profile, error) {
	d, err := c.m.Create(p)
	return d, err
}
func (c *Profile) Find(id string) (*types.Profile, error) {
	d, err := c.m.FindOneById(id)
	return d, err
}
func (c *Profile) Update(id string, p *types.ParamUpdate) (*types.Profile, error) {
	d, err := c.m.UpdateOneById(id, p)
	return d, err
}
func (c *Profile) Delete(id string) (*types.Profile, error) {
	d, err := c.m.DeleteOneById(id)
	return d, err
}
func (c *Profile) Clear() (*[]types.Profile, error) {
	d, err := c.m.DeleteAll()
	return d, err
}
