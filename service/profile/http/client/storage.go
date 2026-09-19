package client

func NewStorage(addr string) *Auth {
	return &Auth{addr}
}
