package timekeeping

import (
	"hrm/src/api/allowance"
	"hrm/src/api/employees"
	"hrm/src/api/offices"
)

const (
	IN  = "1"
	OUT = "2"
)

type Attendance struct {
	Id       string `json:"id,omitempty" bson:"_id,omitempty"`
	UserId   string `json:"uid" bson:"uid"`
	DateTime string `json:"date_time" bson:"date_time"`
	Status   string `json:"status" bson:"status"`
	Ctime    string `json:"ctime" bson:"ctime"`
}

type FilterSchema struct {
	Begin      *string `validate:"omitempty" query:"begin"`
	End        *string `validate:"omitempty" query:"end"`
	EmployeeId *string `validate:"omitempty" query:"employee_id"`
	OfficeId   *string `validate:"omitempty" query:"office_id"`
}
type SalarySchema struct {
	Employee    employees.EmployeeLessInfo `json:"employee"`
	DailySalary map[string]int             `json:"daily_salary"`
	Allowance   allowance.Allowance        `json:"allowance"`
	Office      offices.Office
}

type FineInfoSchema struct {
	Employee employees.EmployeeLessInfo        `json:"employee"`
	FineInfo map[string][]*employees.DailyInfo `json:"daily_info"`
	Office   offices.Office
}

type PayrollSchema struct {
	Employee    employees.EmployeeLessInfo
	DailySalary map[string]int
	Allowance   allowance.Allowance
	FineInfo    map[string][]*employees.DailyInfo
	Office      offices.Office
}
