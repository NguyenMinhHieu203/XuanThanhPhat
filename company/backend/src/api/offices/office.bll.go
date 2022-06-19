package offices

import (
	"fmt"
	shift "hrm/src/api/shifts"
	"hrm/src/lib"
)

func InsertOffice(add_office_schema *AddOfficeSchema) (*string, error) {
	if office, _ := collectionFindOfficeByCode(add_office_schema.Code); office != nil {
		return nil, fmt.Errorf("office code is existed %s", add_office_schema.Code)
	}
	for _, id := range add_office_schema.ShiftIds {
		_, err := shift.FindShiftById(id)
		if err != nil {
			return nil, fmt.Errorf("shift id %s, err %s", id, err.Error())
		}
	}
	var office Office
	office.Id = lib.Rand.Char(12)
	office.Code = add_office_schema.Code
	office.Name = add_office_schema.Name
	office.BasicPay = add_office_schema.BasicPay
	office.WorkDay = add_office_schema.WorkDay
	office.ShiftIds = add_office_schema.ShiftIds
	office.IsActice = true
	office.Ctime = lib.GetCurrentTime()
	office.Mtime = office.Ctime
	return &office.Id, collectionInsertOne(&office)
}

func FindOfficeById(id string) (*Office, error) {
	return collectionFindOfficeById(id)
}

func FindAllOffice() ([]*OfficeFullInfoSchema, error) {
	return collectionFindAllOffice()
}

func UpdateOffice(update_office_schema *UpdateOfficeSchema) error {
	office, err := FindOfficeById(update_office_schema.Id)
	if err != nil {
		return fmt.Errorf("office id not found")
	}
	if update_office_schema.Code!=nil&&office.Code!=*update_office_schema.Code {
		if office, _ := collectionFindOfficeByCode(*update_office_schema.Code); office != nil {
			return fmt.Errorf("office code is existed %s", *update_office_schema.Code)
		}
		office.Code = *update_office_schema.Code
	}
	if update_office_schema.Name != nil && office.Name != *update_office_schema.Name {
		office.Name = *update_office_schema.Name
	}
	if update_office_schema.BasicPay != nil {
		office.BasicPay = *update_office_schema.BasicPay
	}
	if update_office_schema.WorkDay != nil {
		office.WorkDay = *update_office_schema.WorkDay
	}
	if update_office_schema.ShiftIds != nil {
		for _, id := range update_office_schema.ShiftIds {
			_, err := shift.FindShiftById(id)
			if err != nil {
				return fmt.Errorf("shift id %s, err %s", id, err.Error())
			}
		}
		office.ShiftIds = update_office_schema.ShiftIds
	}
	if update_office_schema.IsActive != nil {
		office.IsActice = *update_office_schema.IsActive
	}
	office.Mtime = lib.GetCurrentTime()
	return collectionUpdateOne(office)
}
