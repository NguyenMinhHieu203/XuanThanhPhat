package company

type Company struct {
	Id       string `json:"id" bson:"_id"`
	Name     string `json:"name" bson:"name"`
	Phone    string `json:"phone" bson:"phone"`
	Email    string `json:"email" bson:"email"`
	Website  string `json:"website" bson:"website"`
	Birthday string `json:"birthday" bson:"birthday"`
	Address  string `json:"address" bson:"address"`
	Ctime    string `json:"ctime" bson:"ctime"`
	Mtime    string `json:"mtime" bson:"mtime"`
}

type UpdateCompanySchema struct {
	Name     *string `validate:"omitempty" json:"name"`
	Phone    *string `validate:"omitempty" json:"phone"`
	Email    *string `validate:"omitempty,email" json:"email"`
	Website  *string `validate:"omitempty" json:"website"`
	Birthday *string `validate:"omitempty" json:"birthday"`
	Address  *string `validate:"omitempty" json:"address"`
}
