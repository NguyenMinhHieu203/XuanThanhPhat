package offices

import (
	shift "hrm/src/api/shifts"
)

type Office struct {
	Id       string   `json:"id" bson:"_id"`
	Code     string   `json:"code" bson:"code"`
	Name     string   `json:"name" bson:"name"`
	BasicPay int64    `json:"basic_pay" bson:"basic_pay"`
	WorkDay  int64    `json:"work_day" bson:"work_day"`
	ShiftIds []string `json:"shift_ids" bson:"shift_ids"`
	Ctime    string   `json:"ctime" bson:"ctime"`
	Mtime    string   `json:"mtime" bson:"mtime"`
	IsActice bool     `json:"is_active" bson:"is_active"`
}

type OfficeFullInfoSchema struct {
	Id       string        `json:"id" bson:"_id"`
	Code     string        `json:"code" bson:"code"`
	Name     string        `json:"name" bson:"name"`
	BasicPay int64         `json:"basic_pay" bson:"basic_pay"`
	WorkDay  int64         `json:"work_day" bson:"work_day"`
	Shifts   []shift.Shift `json:"shifts" bson:"shifts"`
	Ctime    string        `json:"ctime" bson:"ctime"`
	Mtime    string        `json:"mtime" bson:"mtime"`
	IsActice bool          `json:"is_active" bson:"is_active"`
}

type AddOfficeSchema struct {
	Code     string   `validate:"required" json:"code"`
	Name     string   `validate:"required" json:"name"`
	BasicPay int64    `validate:"required" json:"basic_pay"`
	WorkDay  int64    `validate:"required" json:"work_day"`
	ShiftIds []string `validate:"required" json:"shift_ids"`
}

type UpdateOfficeSchema struct {
	Id       string   `validate:"required" json:"id"`
	Code     *string  `validate:"omitempty" json:"code"`
	Name     *string  `validate:"omitempty" json:"name"`
	BasicPay *int64   `validate:"omitempty" json:"basic_pay"`
	WorkDay  *int64   `validate:"omitempty" json:"work_day"`
	ShiftIds []string `validate:"omitempty" json:"shift_ids"`
	IsActive *bool    `validate:"omitempty" json:"is_active"`
}
