package errors

import "fmt"

type NoData struct{}
type Unknown struct {
	Cause *error
}
type Mismatch struct{}

func (e *NoData) Error() string {
	return "No Data"
}
func (e *Unknown) Error() string {
	return fmt.Sprintf("Unknown error: %v", e.Cause)
}
func (e *Mismatch) Error() string {
	return "Mismatch Email or Password"
}
