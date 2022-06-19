package timekeeping

import (
	"hrm/src/api/employees"

	"go.mongodb.org/mongo-driver/bson"
)

func GetAttandancesByFilter(filter *FilterSchema) ([]*employees.AttendanceFullInfoSchema, error) {
	match := bson.M{}
	if filter.Begin != nil && filter.End != nil {
		match["date_time"] = bson.M{
			"$gt": filter.Begin,
			"$lt": filter.End,
		}

	}
	if filter.EmployeeId != nil {
		match["uid"] = filter.EmployeeId
	}
	var filter_office bson.M
	if filter.OfficeId != nil {
		filter_office := bson.M{}
		filter_office["office_id"] = filter.OfficeId
	}
	return collectionFindAtendances(match, filter_office)

}
