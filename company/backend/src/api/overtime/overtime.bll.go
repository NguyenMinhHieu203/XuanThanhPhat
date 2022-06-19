package overtime

import (
	"fmt"
	"hrm/src/api/employees"
	shift "hrm/src/api/shifts"
	"hrm/src/lib"
)

func InsertOverTime(add_overtime_schema *AddOverTimeSchema) (*string,error) {
	_,err:=employees.FindEmployeeId(add_overtime_schema.EmployeeId)
	if err!=nil {
		return nil,fmt.Errorf("employee find id err %s",err.Error())
	}
	_,err = shift.FindShiftById(add_overtime_schema.ShiftId)
	if err!=nil{
		return nil,fmt.Errorf("shift find id err %s",err.Error())
	}
	var overtime OverTime
	overtime.Id = lib.Rand.Char(12)
	overtime.CoefficientSalary = add_overtime_schema.CoefficientSalary
	overtime.EmployeeId = add_overtime_schema.EmployeeId
	overtime.ShiftId = add_overtime_schema.ShiftId
	overtime.Date = add_overtime_schema.Date
	overtime.Ctime =lib.GetCurrentTime()
	overtime.Mtime = overtime.Ctime
	return &overtime.Id,collectionInsertOne(&overtime)
}

