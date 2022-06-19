package timekeeping

import (
	"hrm/src/api/employees"
	database "hrm/src/config"

	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
)

var timekeeping_collection *mongo.Collection

func InitTimeKeepingCollection() {
	timekeeping_collection = database.MI.DB.Collection("timekeeping")
}

func collectionInsertAtendance(attendance *Attendance) error {
	ctx, cancel := database.Ctx()
	defer cancel()
	_, err := timekeeping_collection.InsertOne(ctx, attendance)
	return err
}

func collectionFindAtendances(filter_time_uid bson.M, filter_office bson.M) ([]*employees.AttendanceFullInfoSchema, error) {
	ctx, cancel := database.Ctx()
	defer cancel()
	aggregate := `[{"$sort":{"date_time":1}},{"$project":{"uid":"$uid","time":{"date_time":"$date_time","status":"$status"}}},{"$group":{"_id":"$uid","times":{"$push":"$time"}}},{"$lookup":{"from":"employees","localField":"_id","foreignField":"_id","as":"employee"}},{"$unwind":"$employee"},{"$lookup":{"from":"offices","localField":"employee.office_id","foreignField":"_id","as":"office"}},{"$unwind":"$office"},{"$lookup":{"from":"shifts","localField":"office.shift_ids","foreignField":"_id","as":"shifts"}},{"$lookup":{"from":"allowance","localField":"employee.allowance_id","foreignField":"_id","as":"allowance"}},{"$unwind":"$allowance"}]`
	var pipline []bson.M
	bson.UnmarshalExtJSON([]byte(aggregate), true, &pipline)
	if filter_office != nil {
		pipline = append(pipline[:5], pipline[4:]...)
		pipline[5] = bson.M{"$match": filter_office}
	}
	pipline = append([]bson.M{{"$match": filter_time_uid}}, pipline...)
	cursor, err := timekeeping_collection.Aggregate(ctx, pipline)
	if err != nil {
		return nil, err
	}
	var attendances []*employees.AttendanceFullInfoSchema
	err = cursor.All(ctx, &attendances)
	return attendances, err
}


func collectionUpsertAttendance(attendance *Attendance) (error) {
	ctx, cancel := database.Ctx()
	defer cancel()
	opts := options.Update().SetUpsert(true)
	filter := bson.D{
		{Key: "uid", Value: attendance.UserId},
		{Key: "date_time", Value: attendance.DateTime},
		{Key: "status", Value: attendance.Status},
	}
	update := bson.M{"$set": attendance}
	_, err := timekeeping_collection.UpdateOne(ctx, filter, update, opts)
	return err
}
