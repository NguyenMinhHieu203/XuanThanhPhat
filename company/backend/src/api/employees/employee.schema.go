package employees

import (
	"hrm/src/api/allowance"
	"hrm/src/api/offices"
	shift "hrm/src/api/shifts"
)

type Employee struct {
	Id                string  `json:"id" bson:"_id"`
	Avatar            string  `json:"avatar,omitempty" bson:"avatar,omitempty"`
	Code              string  `json:"code" bson:"code"`
	FullName          string  `json:"full_name" bson:"full_name"`
	Regency           string  `json:"regency" bson:"regency"`
	AllowanceId       string  `json:"allowance_id" bson:"allowance_id"`
	Gender            string  `json:"gender" bson:"gender"`
	Email             string  `json:"email" bson:"email"`
	Phone             string  `json:"phone" bson:"phone"`
	Address           string  `json:"address" bson:"address"`
	CoefficientSalary float64 `json:"coefficient_salary" bson:"coefficient_salary"`
	OfficeId          string  `json:"office_id" bson:"office_id"`
	IsActice          bool    `json:"is_active" bson:"is_active"`
	Ctime             string  `json:"ctime" bson:"ctime"`
	Mtime             string  `json:"mtime" bson:"mtime"`
}

type EmployeeFullInfoSchema struct {
	Id                string              `json:"id" bson:"_id"`
	Avatar            string              `json:"avatar,omitempty" bson:"avatar,omitempty"`
	Code              string              `json:"code" bson:"code"`
	FullName          string              `json:"full_name" bson:"full_name"`
	Gender            string              `json:"gender" bson:"gender"`
	Regency           string              `json:"regency" bson:"regency"`
	Email             string              `json:"email" bson:"email"`
	Phone             string              `json:"phone" bson:"phone"`
	Address           string              `json:"address" bson:"address"`
	CoefficientSalary float64             `json:"coefficient_salary" bson:"coefficient_salary"`
	Allowance         allowance.Allowance `json:"allowance,omitempty" bson:"allowance,omitempty"`
	Office            offices.Office      `json:"office" bson:"office"`
	Shifts            []shift.Shift       `json:"shifts,omitempty" bson:"shifts,omitempty"`
	IsActice          bool                `json:"is_active" bson:"is_active"`
	Ctime             string              `json:"ctime" bson:"ctime"`
	Mtime             string              `json:"mtime" bson:"mtime"`
}

type AddEmployeeSchema struct {
	Avatar            *string `validate:"omitempty,base64" json:"avatar"`
	Code              string  `validate:"required" json:"code"`
	FullName          string  `validate:"required" json:"full_name"`
	Gender            string  `validate:"required" json:"gender"`
	Regency           string  `validate:"required" json:"regency"`
	AllowanceId       string  `validate:"required" json:"allowance_id"`
	Email             string  `validate:"required" json:"email"`
	Phone             string  `validate:"required" json:"phone"`
	Address           string  `validate:"required" json:"address"`
	CoefficientSalary float64 `validate:"required" json:"coefficient_salary"`
	OfficeId          string  `validate:"required" json:"office_id"`
}

type UpdateEmployeeSchema struct {
	Id                string   `validate:"required" json:"id"`
	Avatar            *string  `validate:"omitempty,base64" json:"avatar"`
	Code              *string  `validate:"omitempty" json:"code"`
	FullName          *string  `validate:"omitempty" json:"full_name"`
	Gender            *string  `validate:"omitempty" json:"gender"`
	Regency           *string  `validate:"omitempty" json:"regency"`
	AllowanceId       *string  `validate:"omitempty" json:"allowance_id"`
	Email             *string  `validate:"omitempty" json:"email"`
	Phone             *string  `validate:"omitempty" json:"phone"`
	Address           *string  `validate:"omitempty" json:"address"`
	CoefficientSalary *float64 `validate:"omitempty" json:"coefficient_salary"`
	OfficeId          *string  `validate:"omitempty" json:"office_id"`
	IsActice          *bool    `validate:"omitempty" json:"is_active"`
}

type FilterAttendanceSchema struct {
	Time       string   `validate:"required" query:"time"`
	Begin      *string  `validate:"omitempty" query:"begin"`
	End        *string  `validate:"omitempty" query:"end"`
	OfficeId   *string  `validate:"omitempty" query:"office_id"`
	EmployeeId []string `validate:"omitempty" query:"employee_id"`
}

type Time struct {
	DateTime string `json:"date_time" bson:"date_time"`
	Status   string `json:"status" bson:"status"`
}

type EmployeeLessInfo struct {
	Id                string  `json:"id" bson:"_id"`
	Avatar            string  `json:"avatar,omitempty" bson:"avatar"`
	Code              string  `json:"code" bson:"code"`
	FullName          string  `json:"full_name" bson:"full_name"`
	Regency           string  `json:"regency" bson:"regency"`
	Gender            string  `json:"gender" bson:"gender"`
	CoefficientSalary float64 `json:"coefficient_salary" bson:"coefficient_salary"`
}

type AttendanceFullInfoSchema struct {
	Id        string              `json:"id,omitempty" bson:"_id,omitempty"`
	Employee  EmployeeLessInfo    `json:"employee" bson:"employee"`
	Times     []Time              `json:"times" bson:"times"`
	Office    offices.Office      `json:"office" bson:"office"`
	Shifts    []shift.Shift       `json:"shifts" bson:"shifts"`
	Allowance allowance.Allowance `json:"allowance" bson:"allowance"`
}

type MiddleFreeTime struct {
	From string `json:"from"`
	To   string `json:"to"`
}

type DailyInfo struct {
	Name           string            `json:"name"`
	In             string            `json:"time_in"`
	Late           string            `json:"late"`
	Out            string            `json:"time_out"`
	Soon           string            `json:"soon"`
	MiddleFreeTime []*MiddleFreeTime `json:"middle_free_time"`
	TimeFree       string            `json:"time_free"`
	SalaryDay      int               `json:"salary_day"`
	Fine           int               `json:"fine"`
	WorkDay        float32           `json:"timesheet"`
}
