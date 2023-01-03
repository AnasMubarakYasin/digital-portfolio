package source

import (
	"digital-portfolio/auth/authc"
	"digital-portfolio/service/account/database/model"
	"digital-portfolio/service/account/errors"
	"digital-portfolio/service/account/http/client"
	"digital-portfolio/service/account/types"
)

type Customer struct {
	m  *model.Customer
	ca *client.Auth
	cp *client.Profile
}

func NewCustomer(m *model.Customer, ca *client.Auth, cp *client.Profile) *Customer {
	return &Customer{m, ca, cp}
}

func (c *Customer) SignUp(p *types.ParamSignUp) (*types.Account, *string, error) {
	if p.Password != p.PasswordConfirmation {
		return nil, nil, &errors.BadParam{Msg: struct {
			PasswordConfirmation string `json:"password_confirmation" bson:"password_confirmation" xml:"password_confirmation" form:"password_confirmation"`
		}{PasswordConfirmation: "Password Confirmation Mismatch"}}
	}
	if !p.Tos {
		return nil, nil, &errors.BadParam{Msg: struct {
			Tos string `json:"tos" bson:"tos" xml:"tos" form:"tos"`
		}{Tos: "Term of Service must agreed"}}
	}
	pc := &types.ParamCreate{Name: p.Name, Email: p.Email, Password: p.Password}
	d, err := c.m.Create(pc)
	if err != nil {
		return nil, nil, err
	}
	_, err = c.cp.Create(p.Name)
	if err != nil {
		return nil, nil, err
	}
	s, err := c.ca.Gen(&authc.ParamGen{
		AccountID:   d.ID,
		AccountType: "customer",
	})
	return d, s, err
}
func (c *Customer) SignIn(p *types.ParamSignIn) (*types.Account, *string, error) {
	d, err := c.m.FindOne(struct{ Email string }{Email: p.Email})
	if err != nil {
		return nil, nil, err
	}
	if d.Password != p.Password {
		return nil, nil, &errors.Mismatch{}
	}
	s, err := c.ca.Gen(&authc.ParamGen{
		AccountID:   d.ID,
		AccountType: "customer",
	})
	return d, s, err
}

func (c *Customer) All() (*[]types.Account, error) {
	d, err := c.m.All()
	return d, err
}
func (c *Customer) Create(p *types.ParamCreate) (*types.Account, error) {
	d, err := c.m.Create(p)
	return d, err
}
func (c *Customer) Find(id string) (*types.Account, error) {
	d, err := c.m.FindOneById(id)
	return d, err
}
func (c *Customer) Update(id string, p *types.ParamUpdate) (*types.Account, error) {
	d, err := c.m.UpdateOneById(id, p)
	return d, err
}
func (c *Customer) Delete(id string) (*types.Account, error) {
	d, err := c.m.DeleteOneById(id)
	return d, err
}
func (c *Customer) Clear() (*[]types.Account, error) {
	d, err := c.m.DeleteAll()
	return d, err
}
