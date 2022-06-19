package users

type User struct {
	ID         string   `json:"id,omitempty" bson:"_id,omitempty"`
	UserName   string   `json:"username" bson:"username"`
	Password   string   `json:"password" bson:"password"`
	EmployeeId string   `json:"employee_id" bson:"employee_id"`
	Role       []string `json:"role" bson:"role"`
	IsActive   bool     `json:"is_active" bson:"is_active"`
	Ctime      string   `json:"ctime" bson:"ctime"`
	Mtime      string   `json:"mtime" bson:"mtime"`
}

type AddUserSchema struct {
	UserName   string   `validate:"required,min=3,max=32" json:"username"`
	Password   string   `validate:"required,min=6,max=32" json:"password"`
	EmployeeId *string  `validate:"omitempty" json:"employee_id"`
	Role       []string `validate:"required,min=1" json:"role"`
}

type UpdateUserSchema struct {
	Id         string   `validate:"required" json:"id"`
	Password   *string  `validate:"min=6,max=32,omitempty" json:"password"`
	EmployeeId *string  `validate:"omitempty" json:"employee_id"`
	Role       []string `validate:"omitempty" json:"role"`
	IsActive   *bool    `validate:"omitempty" json:"is_active"`
}
