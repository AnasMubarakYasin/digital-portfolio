package authc

import (
	"digital-portfolio/service/account/types"
	"errors"
	"log"
	"time"

	"github.com/golang-jwt/jwt/v4"
)

type Authc struct {
	s []byte
	c Client
}
type Claim struct {
	*ParamGen
	*jwt.RegisteredClaims
}
type ParamGen struct {
	AccountID   string `json:"account_id"`
	AccountType string `json:"account_type"`
}

func New(key []byte, c Client) *Authc {
	return &Authc{key, c}
}

func (a *Authc) Authenticate(s string) (*types.Account, error) {
	c := &Claim{}
	t, err := jwt.ParseWithClaims(s, c, func(t *jwt.Token) (interface{}, error) {
		return a.s, nil
	})
	if err != nil || !t.Valid {
		if errors.Is(err, jwt.ErrTokenMalformed) {
			return nil, err
		} else if errors.Is(err, jwt.ErrTokenExpired) || errors.Is(err, jwt.ErrTokenNotValidYet) {
			return nil, err
		} else {
			return nil, err
		}
	}
	dat, err := a.c.Get(c.AccountID, c.AccountType)
	return dat, err
}
func (a *Authc) Generate(p *ParamGen) (string, error) {
	c := &Claim{
		p,
		&jwt.RegisteredClaims{
			// A usual scenario is to set the expiration time relative to the current time
			ExpiresAt: jwt.NewNumericDate(time.Now().Add(24 * time.Hour)),
			IssuedAt:  jwt.NewNumericDate(time.Now()),
			NotBefore: jwt.NewNumericDate(time.Now()),
			// Issuer:    "test",
			// Subject:   "somebody",
			// ID:        "1",
			// Audience:  []string{"somebody_else"},
		},
	}
	t := jwt.NewWithClaims(jwt.SigningMethodHS256, c)
	s, err := t.SignedString(a.s)
	return s, err
}
func (a *Authc) LogErr(err ...error) {
	log.Println("[error]", err)
}
