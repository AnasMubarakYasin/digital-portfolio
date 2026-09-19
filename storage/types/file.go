package types

type File struct {
	ID         string `json:"id" bson:"_id" xml:"id" form:"id"`
	Visibility string `json:"visibility" bson:"visibility" xml:"visibility" form:"visibility"`
	Type       string `json:"type" bson:"type" xml:"type" form:"type"`
	Size       int    `json:"size" bson:"size" xml:"size" form:"size"`
	Path       string `json:"path" bson:"path" xml:"path" form:"path"`
}

type ParamCreate struct {
	Visibility string `json:"visibility" bson:"visibility" xml:"visibility" form:"visibility"`
	Type       string `json:"type" bson:"type" xml:"type" form:"type"`
	Size       int    `json:"size" bson:"size" xml:"size" form:"size"`
	Path       string `json:"path" bson:"path" xml:"path" form:"path"`
	// Content    []byte `json:"content" bson:"content" xml:"content" form:"content"`
}
type ParamUpdate struct {
	Visibility string `json:"visibility" bson:"visibility" xml:"visibility" form:"visibility"`
	Type       string `json:"type" bson:"type" xml:"type" form:"type"`
	Size       int    `json:"size" bson:"size" xml:"size" form:"size"`
	Path       string `json:"path" bson:"path" xml:"path" form:"path"`
	// Content    []byte `json:"content" bson:"content" xml:"content" form:"content"`
}
