package types

type Account struct {
	ID       string `json:"id" bson:"_id" xml:"id" form:"id"`
	Name     string `json:"name" bson:"name" xml:"name" form:"name"`
	Email    string `json:"email" bson:"email" xml:"email" form:"email"`
	Password string `json:"password" bson:"password" xml:"password" form:"password"`
}
type ParamSignUp struct {
	Name                 string `json:"name" bson:"name" xml:"name" form:"name"`
	Email                string `json:"email" bson:"email" xml:"email" form:"email"`
	Password             string `json:"password" bson:"password" xml:"password" form:"password"`
	PasswordConfirmation string `json:"password_confirmation" bson:"password_confirmation" xml:"password_confirmation" form:"password_confirmation"`
	Tos                  bool   `json:"tos" bson:"tos" xml:"tos" form:"tos"`
}
type ParamSignIn struct {
	Email    string `json:"email" bson:"email" xml:"email" form:"email"`
	Password string `json:"password" bson:"password" xml:"password" form:"password"`
}
type ParamCreate struct {
	Name     string `json:"name" bson:"name" xml:"name" form:"name"`
	Email    string `json:"email" bson:"email" xml:"email" form:"email"`
	Password string `json:"password" bson:"password" xml:"password" form:"password"`
}
type ParamUpdate struct {
	Name     *string `json:"name" bson:"name" xml:"name" form:"name"`
	Email    *string `json:"email" bson:"email" xml:"email" form:"email"`
	Password *string `json:"password" bson:"password" xml:"password" form:"password"`
}

type ParamAdministratorSignIn struct {
	Name     string `json:"name" bson:"name" xml:"name" form:"name"`
	Password string `json:"password" bson:"password" xml:"password" form:"password"`
}
