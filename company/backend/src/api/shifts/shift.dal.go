package shift

import (
	"fmt"
	database "hrm/src/config"

	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/mongo"
)

var shifts_collection *mongo.Collection

func initShiftsCollection() {
	shifts_collection = database.MI.DB.Collection("shifts")
}

func collectionInsertOne(shift *Shift) error {
	ctx, cancel := database.Ctx()
	defer cancel()
	_, err := shifts_collection.InsertOne(ctx, shift)
	return err
}

func collectionFind(filter bson.M) ([]*Shift, error) {
	ctx, cancel := database.Ctx()
	defer cancel()
	cursor, err := shifts_collection.Find(ctx, filter)
	if err != nil {
		return nil, err
	}
	var shifts []*Shift
	err = cursor.All(ctx, &shifts)
	return shifts, err
}

func collectionFindAllShifts() ([]*Shift, error) {
	return collectionFind(bson.M{})
}

func collectionFindOne(obj bson.M) (*Shift, error) {
	ctx, cancel := database.Ctx()
	defer cancel()
	var shift *Shift
	err := shifts_collection.FindOne(ctx, obj).Decode(&shift)
	return shift, err
}

func collectionFindShiftById(id string) (*Shift, error) {
	return collectionFindOne(bson.M{"_id":id})
}

func collectionUpdateOne(shift *Shift) error {
	ctx, cancel := database.Ctx()
	defer cancel()
	cursor, err := shifts_collection.UpdateOne(ctx, bson.M{"_id": shift.Id}, bson.M{"$set":shift})
	if err != nil {
		return err
	}
	if cursor.MatchedCount == 0 {
		return fmt.Errorf("shift id not found")
	}
	return nil
}

func collectionDeActiveShift(id string) error {
	ctx, cancel := database.Ctx()
	defer cancel()
	cursor, err := shifts_collection.UpdateOne(ctx, bson.M{"_id": id}, bson.M{"$set":bson.M{"is_active":false}})
	if err != nil {
		return err
	}
	if cursor.MatchedCount == 0 {
		return fmt.Errorf("shift id not found")
	}
	return nil
}