package employees

import (
	"fmt"
	database "hrm/src/config"

	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/mongo"
)

var employees_collection *mongo.Collection

func initEmployeesCollection() {
	employees_collection = database.MI.DB.Collection("employees")
}

func collectionInsertEmployee(employee *Employee) error {
	ctx, cancel := database.Ctx()
	defer cancel()
	_, err := employees_collection.InsertOne(ctx, employee)
	return err
}

func collectionFind(filter bson.M) ([]*EmployeeFullInfoSchema, error) {
	ctx, cancel := database.Ctx()
	defer cancel()
	aggregate := `[{"$lookup":{"from":"offices","localField":"office_id","foreignField":"_id","as":"office"}},{"$unwind":"$office"},{"$lookup":{"from":"shifts","localField":"office.shift_ids","foreignField":"_id","as":"shifts"}},{"$lookup":{"from":"allowance","localField":"allowance_id","foreignField":"_id","as":"allowance"}},{"$unwind":"$allowance"}]`
	var pipeline []bson.M
	bson.UnmarshalExtJSON([]byte(aggregate), true, &pipeline)
	pipeline = append([]bson.M{{"$match": filter}}, pipeline...)
	cursor, err := employees_collection.Aggregate(ctx, pipeline)
	if err != nil {
		return nil, err
	}
	var employees []*EmployeeFullInfoSchema
	err = cursor.All(ctx, &employees)
	return employees, err
}

func collectionFindAllEmployees() ([]*EmployeeFullInfoSchema, error) {
	return collectionFind(bson.M{})
}

func collectionFindOne(obj bson.M) (*Employee, error) {
	ctx, cancel := database.Ctx()
	defer cancel()
	var employee *Employee
	err := employees_collection.FindOne(ctx, obj).Decode(&employee)
	if err != nil {
		err = fmt.Errorf("find employee error: %v", err)
	}
	return employee, err
}

func collectionFindEmployeeById(id string) (*Employee, error) {
	return collectionFindOne(bson.M{"_id": id})
}

func collectionFindEmployeeFullInfoById(id string) (*EmployeeFullInfoSchema, error) {
	ctx, cancel := database.Ctx()
	defer cancel()
	aggregate := fmt.Sprintf(`[{"$match":{"_id":"%s"}},{"$lookup":{"from":"offices","localField":"office_id","foreignField":"_id","as":"office"}},{"$unwind":"$office"},{"$lookup":{"from":"shifts","localField":"office.shift_ids","foreignField":"_id","as":"shifts"}},{"$lookup":{"from":"allowance","localField":"allowance_id","foreignField":"_id","as":"allowance"}},{"$unwind":"$allowance"}]`, id)
	var pipeline []bson.M
	bson.UnmarshalExtJSON([]byte(aggregate), true, &pipeline)
	cursor, err := employees_collection.Aggregate(ctx, pipeline)
	if err != nil {
		return nil, fmt.Errorf("find employee id error: %v", err)
	}
	var employees []EmployeeFullInfoSchema
	err = cursor.All(ctx, &employees)
	if err != nil {
		return nil, fmt.Errorf("find employee id error: %v", err)
	}
	return &employees[0], nil
}

func collectionFindEmployeeByCode(code string) (*Employee, error) {
	return collectionFindOne(bson.M{"code": code})
}

func collectionUpdateOne(employee *Employee) error {
	ctx, cancel := database.Ctx()
	defer cancel()
	cusor, err := employees_collection.UpdateOne(ctx, bson.M{"_id": employee.Id}, bson.M{"$set": employee})
	if err != nil {
		return err
	}
	if cusor.MatchedCount == 0 {
		return fmt.Errorf("employee id not found")
	}
	return nil
}

func collectionDeActiveEmployee(id string) error {
	ctx, cancel := database.Ctx()
	defer cancel()
	cusor, err := employees_collection.UpdateOne(ctx, bson.M{"_id": id}, bson.M{"$set": bson.M{"is_active": false}})
	if err != nil {
		return err
	}
	if cusor.MatchedCount == 0 {
		return fmt.Errorf("employee id not found")
	}
	return nil
}

func CollectionGetAttendance(filter *FilterAttendanceSchema) ([]*AttendanceFullInfoSchema, error) {
	ctx, cancel := database.Ctx()
	defer cancel()

	var begin, end string
	if filter.Begin != nil && filter.End != nil {
		begin = filter.Time + *filter.Begin
		end = filter.Time + *filter.End
	} else {
		begin = filter.Time
		end = filter.Time + "99"
	}
	aggregate := fmt.Sprintf(`[{"$match":{"is_active":true}},{"$project":{"employee":{"_id":"$_id","avatar":"$avatar","code":"$code","full_name":"$full_name","gender":"$gender","coefficient_salary":"$coefficient_salary","regency":"$regency"},"office":"$office_id","allowance":"$allowance_id"}},{"$lookup":{"from":"offices","localField":"office","foreignField":"_id","as":"office"}},{"$unwind":"$office"},{"$lookup":{"from":"shifts","localField":"office.shift_ids","foreignField":"_id","as":"shifts"}},{"$lookup":{"from":"allowance","localField":"allowance","foreignField":"_id","as":"allowance"}},{"$unwind":"$allowance"},{"$lookup":{"from":"timekeeping","let":{"id":"$_id"},"pipeline":[{"$sort":{"date_time":1}},{"$match":{"$expr":{"$and":[{"$eq":["$uid","$$id"]},{"$gt":["$date_time","%s"]},{"$lt":["$date_time","%s"]}]}}}],"as":"times"}},{"$sort":{"employee.coefficient_salary": -1}}]`, begin, end)
	var pipeline []bson.M
	bson.UnmarshalExtJSON([]byte(aggregate), true, &pipeline)
	var match bson.M
	if filter.OfficeId != nil {
		match = bson.M{
			"is_active": true,
			"office_id": filter.OfficeId,
		}
	}
	if filter.EmployeeId != nil {
		if match != nil {
			match["_id"] = bson.M{
				"$in": filter.EmployeeId,
			}
		} else {
			match = bson.M{
				"is_active": true,
				"_id": bson.M{
					"$in": filter.EmployeeId,
				},
			}
		}
	}
	if match != nil {
		pipeline[0] = bson.M{
			"$match": match,
		}
	}
	cursor, err := employees_collection.Aggregate(ctx, pipeline)
	if err != nil {
		return nil, err
	}
	var attendances []*AttendanceFullInfoSchema
	err = cursor.All(ctx, &attendances)
	return attendances, err
}
