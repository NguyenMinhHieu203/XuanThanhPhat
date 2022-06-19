package allowance

import (
	"fmt"
	"hrm/src/lib"
)

func InsertAllowance(new_allowance *AddAllowanceSchema) (*string, error) {
	var allowance Allowance
	allowance.Id = lib.Rand.Char(8)
	allowance.Note = new_allowance.Note
	allowance.AllowanceItems =new_allowance.AllowanceItems
	allowance.Ctime = lib.GetCurrentTime()
	allowance.Mtime = allowance.Ctime
	return &allowance.Id, collectionInsertAllowance(&allowance)
}

func UpdateAllowance(new_allowance *UpdateAllowanceSchema) error {
	allowance, err := collectionFindAllowanceById(new_allowance.Id)
	if err != nil {
		return err
	}
	if new_allowance.Note != nil {
		allowance.Note = *new_allowance.Note
	}
	if new_allowance.AllowanceItems != nil && len(new_allowance.AllowanceItems) > 0 {
		allowance.AllowanceItems = new_allowance.AllowanceItems
	}
	allowance.Mtime = lib.GetCurrentTime()
	return collectionUpdateOne(allowance)
}

func FindAllowanceById(id string) (*Allowance, error){
	allowance,err :=collectionFindAllowanceById(id)
	if err!=nil {
		err = fmt.Errorf("find allowance %v",err)
	}
	return allowance,err
}