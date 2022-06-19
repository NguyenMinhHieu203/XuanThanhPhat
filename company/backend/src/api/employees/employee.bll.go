package employees

import (
	"fmt"
	"hrm/src/api/allowance"
	"hrm/src/api/offices"
	"hrm/src/lib"
)

func InsertEmployee(add_employee_collection *AddEmployeeSchema) (*string, error) {

	office, _ := offices.FindOfficeById(add_employee_collection.OfficeId)
	if office == nil {
		return nil, fmt.Errorf("office id not found")
	}
	emp, _ := collectionFindEmployeeByCode(add_employee_collection.Code)
	if emp != nil {
		return nil, fmt.Errorf("employee code is existed")
	}

	var employee Employee
	_,err:=allowance.FindAllowanceById(add_employee_collection.AllowanceId)
	if err!=nil {
		return nil,err
	}
	employee.AllowanceId = add_employee_collection.AllowanceId

	if add_employee_collection.Avatar != nil {
		path,err:=lib.SaveImage(*add_employee_collection.Avatar)
		if err!=nil {
			return nil,err
		}
		employee.Avatar = path
	}

	employee.Id = lib.Rand.Num(12)
	employee.Code = add_employee_collection.Code
	employee.OfficeId = add_employee_collection.OfficeId
	employee.Regency = add_employee_collection.Regency
	employee.FullName = add_employee_collection.FullName
	employee.Email = add_employee_collection.Email
	employee.Gender = add_employee_collection.Gender
	employee.Address = add_employee_collection.Address
	employee.CoefficientSalary = add_employee_collection.CoefficientSalary
	employee.Phone = add_employee_collection.Phone
	employee.IsActice = true
	employee.Ctime = lib.GetCurrentTime()
	employee.Mtime = employee.Ctime
	return &employee.Id, collectionInsertEmployee(&employee)
}

func FindAllEmployees() ([]*EmployeeFullInfoSchema, error) {
	return collectionFindAllEmployees()
}

func FindEmployeeId(id string) (*Employee, error) {
	return collectionFindEmployeeById(id)
}

func UpdateEmployee(update_employee_schema *UpdateEmployeeSchema) error {
	employee, err := collectionFindEmployeeById(update_employee_schema.Id)
	if err != nil {
		return err
	}
	if update_employee_schema.Regency!=nil {
		employee.Regency = *update_employee_schema.Regency
	}
	if update_employee_schema.Address != nil {
		employee.Address = *update_employee_schema.Address
	}
	if update_employee_schema.CoefficientSalary != nil {
		employee.CoefficientSalary = *update_employee_schema.CoefficientSalary
	}
	if update_employee_schema.Email != nil {
		employee.Email = *update_employee_schema.Email
	}
	if update_employee_schema.FullName != nil {
		employee.FullName = *update_employee_schema.FullName
	}
	if update_employee_schema.Gender != nil {
		employee.Gender = *update_employee_schema.Gender
	}
	if update_employee_schema.Avatar != nil {
		path,err:=lib.SaveImage(*update_employee_schema.Avatar)
		if err!=nil {
			return err
		}
		employee.Avatar = path
	}
	if update_employee_schema.Code != nil && employee.Code != *update_employee_schema.Code {
		emp, _ := collectionFindEmployeeByCode(*update_employee_schema.Code)
		if emp != nil {
			return fmt.Errorf("employee code is existed")
		}
		employee.Code = *update_employee_schema.Code
	}
	if update_employee_schema.OfficeId != nil && employee.Id != *update_employee_schema.OfficeId {
		_, err := offices.FindOfficeById(*update_employee_schema.OfficeId)
		if err != nil {
			return err
		}
		employee.OfficeId = *update_employee_schema.OfficeId
	}

	if update_employee_schema.AllowanceId!=nil {
		_, err := allowance.FindAllowanceById(*update_employee_schema.AllowanceId)
		if err!=nil {
			return err
		}
		employee.AllowanceId = *update_employee_schema.AllowanceId
	}

	if update_employee_schema.IsActice != nil {
		employee.IsActice = *update_employee_schema.IsActice
	}
	employee.Mtime = lib.GetCurrentTime()
	return collectionUpdateOne(employee)
}
