package timekeeping

import (
	"hrm/src/api/employees"
)

func fine(filter *employees.FilterAttendanceSchema) ([]*FineInfoSchema, error) {

	attendances, err := employees.CollectionGetAttendance(filter)
	if err != nil {
		return nil, err
	}
	var salaries []*FineInfoSchema
	for _, attendance := range attendances {
		_, f := attendance.CalSalary()
		salaries = append(salaries, &FineInfoSchema{
			Employee: attendance.Employee,
			FineInfo: f,
			Office:   attendance.Office,
		})
	}

	return salaries, nil
}

func salary(filter *employees.FilterAttendanceSchema) ([]*SalarySchema, error) {
	attendances, err := employees.CollectionGetAttendance(filter)
	if err != nil {
		return nil, err
	}
	var salaries []*SalarySchema
	for _, attendance := range attendances {
		salary, _ := attendance.CalSalary()
		salaries = append(salaries, &SalarySchema{
			Employee:    attendance.Employee,
			DailySalary: salary,
			Allowance:   attendance.Allowance,
			Office:      attendance.Office,
		})
	}

	return salaries, nil
}

func GetPayrollData(filter *employees.FilterAttendanceSchema) ([]*PayrollSchema, error) {
	attendances, err := employees.CollectionGetAttendance(filter)
	if err != nil {
		return nil, err
	}
	var payroll []*PayrollSchema
	for _, attendance := range attendances {
		salary, _ := attendance.CalSalary()
		_, f := attendance.CalSalary()
		payroll = append(payroll, &PayrollSchema{
			Employee:    attendance.Employee,
			DailySalary: salary,
			Allowance:   attendance.Allowance,
			Office:      attendance.Office,
			FineInfo:    f,
		})
	}

	return payroll, nil
}
