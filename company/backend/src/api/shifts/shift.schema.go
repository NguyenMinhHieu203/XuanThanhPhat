package shift

type Shift struct {
	Id                string  `json:"id" bson:"_id"`
	Name              string  `json:"name" bson:"name"`
	TimeIn            string  `json:"time_in" bson:"time_in"`
	TimeOut           string  `json:"time_out" bson:"time_out"`
	WorkingTime       float32 `json:"working_time" bson:"working_time"`
	Weekends          []int8  `json:"weekends" bson:"weekends"`
	CoefficientSalary float32 `json:"coefficient_salary" bson:"coefficient_salary"`
	IsActice          bool    `json:"is_active" bson:"is_active"`
	Ctime             string  `json:"ctime" bson:"ctime"`
	Mtime             string  `json:"mtime" bson:"mtime"`
}

type AddShiftSchema struct {
	Name              string  `validate:"required" json:"name"`
	TimeIn            string  `validate:"required" json:"time_in"`
	TimeOut           string  `validate:"required" json:"time_out"`
	WorkingTime       float32 `validate:"required" json:"working_time"`
	Weekends          []int8  `validate:"required" json:"weekends"`
	CoefficientSalary float32 `validate:"required" json:"coefficient_salary"`
}

type UpdateShiftSchema struct {
	Id                string   `validate:"required" json:"id"`
	Name              *string  `validate:"omitempty" json:"name"`
	TimeIn            *string  `validate:"omitempty" json:"time_in"`
	TimeOut           *string  `validate:"omitempty" json:"time_out"`
	WorkingTime       *float32 `validate:"omitempty" json:"working_time"`
	Weekends          []int8   `validate:"omitempty" json:"weekends"`
	CoefficientSalary *float32 `validate:"omitempty" json:"coefficient_salary"`
	IsActice          *bool    `validate:"omitempty" json:"is_active"`
}
