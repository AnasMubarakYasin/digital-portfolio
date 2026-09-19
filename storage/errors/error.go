package errors

import (
	"fmt"
)

type NoData struct{}
type Unknown struct {
	Cause *error
}
type Mismatch struct{}
type BadParam struct {
	Msg any
}

func (e *NoData) Error() string {
	return "No Data"
}
func (e *Unknown) Error() string {
	return fmt.Sprintf("Unknown error: %v", e.Cause)
}
func (e *Mismatch) Error() string {
	return "Mismatch Email or Password"
}
func (e *BadParam) Error() string {
	return "Bad Parameter"
}
func (e *BadParam) Is(target error) bool {
	_, ok := target.(*BadParam)
	return ok
}
