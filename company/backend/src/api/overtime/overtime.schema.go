package overtime

import (
	"hrm/src/api/employees"
	shift "hrm/src/api/shifts"
)

type OverTime struct {
	Id                string  `json:"id" bson:"_id"`
	EmployeeId        string  `json:"employee_id" bson:"employee_id"`
	ShiftId           string  `json:"shift_id" bson:"shift_id"`
	Date              string  `json:"date" bson:"date"`
	CoefficientSalary float32 `json:"coefficient_salary" bson:"coefficient_salary"`
	Ctime             string  `json:"ctime" bson:"ctime"`
	Mtime             string  `json:"mtime" bson:"mtime"`
}

type OverTimeFullInfo struct {
	Id                string             `json:"id" bson:"_id"`
	Employee          employees.Employee `json:"employee" bson:"employee"`
	Shift             shift.Shift        `json:"shift" bson:"shift"`
	Date              string             `json:"date" bson:"date"`
	CoefficientSalary float32            `json:"coefficient_salary" bson:"coefficient_salary"`
	Ctime             string             `json:"ctime" bson:"ctime"`
	Mtime             string             `json:"mtime" bson:"mtime"`
}

type AddOverTimeSchema struct {
	EmployeeId        string  `validate:"required" json:"employee_id"`
	ShiftId           string  `validate:"required" json:"shift_id"`
	Date              string  `validate:"required" json:"date"`
	CoefficientSalary float32 `validate:"required" json:"coefficient_salary"`
}

type UpdateOverTimeSchema struct {
	Id                string   `validate:"required" json:"id"`
	EmployeeId        *string  `validate:"omitempty" json:"employee_id"`
	ShiftId           *string  `validate:"omitempty" json:"shift_id"`
	Date              *string  `validate:"omitempty" json:"date"`
	CoefficientSalary *float32 `validate:"omitempty" json:"coefficient_salary"`
}
