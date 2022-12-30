package authc

import "golokal/service/account/types"

type Client interface {
	Get(id string, t string) (*types.Account, error)
}
