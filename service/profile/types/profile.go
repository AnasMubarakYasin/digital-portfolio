package types

type Profile struct {
	ID                 string              `json:"id,omitempty" bson:"_id,omitempty" xml:"id,omitempty" form:"id,omitempty"`
	Photo              string              `json:"photo" bson:"photo" xml:"photo" form:"photo"`
	Name               string              `json:"name" bson:"name" xml:"name" form:"name"`
	Headline           string              `json:"headline" bson:"headline" xml:"headline" form:"headline"`
	Resume             string              `json:"resume" bson:"resume" xml:"resume" form:"resume"`
	Website            string              `json:"website" bson:"website" xml:"website" form:"website"`
	Career             string              `json:"career" bson:"career" xml:"career" form:"career"`
	Personal           Personal            `json:"personal" bson:"personal" xml:"personal" form:"personal"`
	Experiences        []Experience        `json:"experiences" bson:"experiences" xml:"experiences" form:"experiences"`
	Projects           []Project           `json:"projects" bson:"projects" xml:"projects" form:"projects"`
	Certificates       []Certificate       `json:"certificates" bson:"certificates" xml:"certificates" form:"certificates"`
	Educations         []Education         `json:"educations" bson:"educations" xml:"educations" form:"educations"`
	Languages          []Language          `json:"languages" bson:"languages" xml:"languages" form:"languages"`
	ActivePositions    []ActivePosition    `json:"active_positions" bson:"active_positions" xml:"active_positions" form:"active_positions"`
	PreferredPositions []PreferredPosition `json:"preferred_positions" bson:"preferred_positions" xml:"preferred_positions" form:"preferred_positions"`
	Skills             []Skill             `json:"skills" bson:"skills" xml:"skills" form:"skills"`
}
type Personal struct {
	Email    string `json:"email" bson:"email" xml:"email" form:"email"`
	Phone    string `json:"phone" bson:"phone" xml:"phone" form:"phone"`
	DoB      string `json:"dob" bson:"dob" xml:"dob" form:"dob"`
	Salary   string `json:"salary" bson:"salary" xml:"salary" form:"salary"`
	Location string `json:"location" bson:"location" xml:"location" form:"location"`
	Work     string `json:"work" bson:"work" xml:"work" form:"work"`
}
type SocialMedia struct {
	Name string `json:"name" bson:"name" xml:"name" form:"name"`
	Link string `json:"link" bson:"link" xml:"link" form:"link"`
}
type Experience struct {
	Photo string `json:"photo" bson:"photo" xml:"photo" form:"photo"`
	Name  string `json:"name" bson:"name" xml:"name" form:"name"`
}
type Project struct {
	ID          string `json:"id,omitempty" bson:"_id,omitempty" xml:"id,omitempty" form:"id,omitempty"`
	Photo       string `json:"photo" bson:"photo" xml:"photo" form:"photo"`
	Name        string `json:"name" bson:"name" xml:"name" form:"name"`
	Client      string `json:"client" bson:"client" xml:"client" form:"client"`
	Description string `json:"description" bson:"description" xml:"description" form:"description"`
	Link        string `json:"link" bson:"link" xml:"link" form:"link"`
}
type Certificate struct {
	Photo     string `json:"photo" bson:"photo" xml:"photo" form:"photo"`
	Name      string `json:"name" bson:"name" xml:"name" form:"name"`
	Publisher string `json:"publisher" bson:"publisher" xml:"publisher" form:"publisher"`
	Published string `json:"published" bson:"published" xml:"published" form:"published"`
}
type Education struct {
	Photo     string `json:"photo" bson:"photo" xml:"photo" form:"photo"`
	Name      string `json:"name" bson:"name" xml:"name" form:"name"`
	Title     string `json:"title" bson:"title" xml:"title" form:"title"`
	Graduated string `json:"graduated" bson:"graduated" xml:"graduated" form:"graduated"`
}
type Language struct {
	Photo string `json:"photo" bson:"photo" xml:"photo" form:"photo"`
	Name  string `json:"name" bson:"name" xml:"name" form:"name"`
	Level string `json:"level" bson:"level" xml:"level" form:"level"`
}
type ActivePosition struct {
	Photo   string `json:"photo" bson:"photo" xml:"photo" form:"photo"`
	Name    string `json:"name" bson:"name" xml:"name" form:"name"`
	Company string `json:"company" bson:"company" xml:"company" form:"company"`
	Status  string `json:"status" bson:"status" xml:"status" form:"status"`
}
type PreferredPosition struct {
	Name       string `json:"name" bson:"name" xml:"name" form:"name"`
	Experience string `json:"experience" bson:"experience" xml:"experience" form:"experience"`
}
type Skill struct {
	Name string `json:"name" bson:"name" xml:"name" form:"name"`
}

type ParamCreate struct {
	Photo              string              `json:"photo" bson:"photo" xml:"photo" form:"photo"`
	Name               string              `json:"name" bson:"name" xml:"name" form:"name"`
	Headline           string              `json:"headline" bson:"headline" xml:"headline" form:"headline"`
	Resume             string              `json:"resume" bson:"resume" xml:"resume" form:"resume"`
	Website            string              `json:"website" bson:"website" xml:"website" form:"website"`
	Career             string              `json:"career" bson:"career" xml:"career" form:"career"`
	Personal           Personal            `json:"personal" bson:"personal" xml:"personal" form:"personal"`
	Experiences        []Experience        `json:"experiences" bson:"experiences" xml:"experiences" form:"experiences"`
	Projects           []Project           `json:"projects" bson:"projects" xml:"projects" form:"projects"`
	Certificates       []Certificate       `json:"certificates" bson:"certificates" xml:"certificates" form:"certificates"`
	Educations         []Education         `json:"educations" bson:"educations" xml:"educations" form:"educations"`
	Languages          []Language          `json:"languages" bson:"languages" xml:"languages" form:"languages"`
	ActivePositions    []ActivePosition    `json:"active_positions" bson:"active_positions" xml:"active_positions" form:"active_positions"`
	PreferredPositions []PreferredPosition `json:"preferred_positions" bson:"preferred_positions" xml:"preferred_positions" form:"preferred_positions"`
	Skills             []Skill             `json:"skills" bson:"skills" xml:"skills" form:"skills"`
}
type ParamUpdate struct {
	Photo              string              `json:"photo" bson:"photo" xml:"photo" form:"photo"`
	Name               string              `json:"name" bson:"name" xml:"name" form:"name"`
	Headline           string              `json:"headline" bson:"headline" xml:"headline" form:"headline"`
	Resume             string              `json:"resume" bson:"resume" xml:"resume" form:"resume"`
	Website            string              `json:"website" bson:"website" xml:"website" form:"website"`
	Career             string              `json:"career" bson:"career" xml:"career" form:"career"`
	Personal           Personal            `json:"personal" bson:"personal" xml:"personal" form:"personal"`
	Experiences        []Experience        `json:"experiences" bson:"experiences" xml:"experiences" form:"experiences"`
	Projects           []Project           `json:"projects" bson:"projects" xml:"projects" form:"projects"`
	Certificates       []Certificate       `json:"certificates" bson:"certificates" xml:"certificates" form:"certificates"`
	Educations         []Education         `json:"educations" bson:"educations" xml:"educations" form:"educations"`
	Languages          []Language          `json:"languages" bson:"languages" xml:"languages" form:"languages"`
	ActivePositions    []ActivePosition    `json:"active_positions" bson:"active_positions" xml:"active_positions" form:"active_positions"`
	PreferredPositions []PreferredPosition `json:"preferred_positions" bson:"preferred_positions" xml:"preferred_positions" form:"preferred_positions"`
	Skills             []Skill             `json:"skills" bson:"skills" xml:"skills" form:"skills"`
}
