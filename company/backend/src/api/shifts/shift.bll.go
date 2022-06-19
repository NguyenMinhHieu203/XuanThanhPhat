package shift

import (
	"fmt"
	"hrm/src/lib"

	"go.mongodb.org/mongo-driver/bson"
)

func InsertShift(add_shift_schema *AddShiftSchema) (*string, error) {
	if shift,_ := collectionFindOne(bson.M{
		"time_in":add_shift_schema.TimeIn,
		"time_out":add_shift_schema.TimeOut,
		"weekends":add_shift_schema.Weekends,
	}); shift!=nil{
		return nil,fmt.Errorf("shift id %s has same data time_in, time_out, weekends", shift.Id)
	}
	var shift Shift
	shift.Id = lib.Rand.Char(12)
	shift.CoefficientSalary = add_shift_schema.CoefficientSalary
	shift.TimeIn = add_shift_schema.TimeIn
	shift.TimeOut = add_shift_schema.TimeOut
	shift.WorkingTime = add_shift_schema.WorkingTime
	shift.Weekends = add_shift_schema.Weekends
	shift.Name = add_shift_schema.Name
	shift.IsActice = true
	shift.Ctime = lib.GetCurrentTime()
	shift.Mtime = shift.Ctime
	return &shift.Id,collectionInsertOne(&shift)
}

func FindShiftById(id string)(*Shift,error){
	return collectionFindShiftById(id)
}

func FindAllShifts()([]*Shift,error){
	return collectionFindAllShifts()
}

func UpdateShift(update_shift_schema *UpdateShiftSchema)error{
	shift,err:=collectionFindShiftById(update_shift_schema.Id)
	if err!=nil {
		return err
	}
	if update_shift_schema.CoefficientSalary!=nil {
		shift.CoefficientSalary = *update_shift_schema.CoefficientSalary
	}
	if update_shift_schema.Name!=nil {
		shift.Name = *update_shift_schema.Name
	}
	if update_shift_schema.WorkingTime!=nil {
		shift.WorkingTime = *update_shift_schema.WorkingTime
	}
	if update_shift_schema.TimeIn!=nil {
		shift.TimeIn = *update_shift_schema.TimeIn
	}
	if update_shift_schema.TimeOut!=nil {
		shift.TimeOut = *update_shift_schema.TimeOut
	}
	if update_shift_schema.Weekends!=nil {
		shift.Weekends = update_shift_schema.Weekends
	}
	if update_shift_schema.IsActice!=nil {
		shift.IsActice = *update_shift_schema.IsActice
	}
	if shift_check,_ := collectionFindOne(bson.M{
		"_id":bson.M{"$ne":shift.Id},
		"time_in":shift.TimeIn,
		"time_out":shift.TimeOut,
		"weekends":shift.Weekends,
	}); shift_check!=nil{
		return fmt.Errorf("shift id %s has same data time_in, time_out, weekends", shift_check.Id)
	}
	shift.Mtime = lib.GetCurrentTime()
	return collectionUpdateOne(shift)
}
