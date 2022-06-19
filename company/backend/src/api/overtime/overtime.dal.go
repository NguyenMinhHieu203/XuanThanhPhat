package overtime

import (
	"fmt"
	database "hrm/src/config"

	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/mongo"
)

var overtime_collection *mongo.Collection

func initOverTimeCollection() {
	overtime_collection = database.MI.DB.Collection("overtime")
}

func collectionInsertOne(overtime *OverTime) error {
	ctx, cancel := database.Ctx()
	defer cancel()
	_, err := overtime_collection.InsertOne(ctx, overtime)
	return err
}

func collectionFindOne(filter bson.M) (*OverTime, error) {
	ctx,cancel := database.Ctx()
	defer cancel()
	var overtime *OverTime
	err:= overtime_collection.FindOne(ctx, filter).Decode(&overtime)
	return overtime,err
}

func collectionFindOverTimeById(id string) (*OverTime, error) {
	return collectionFindOne(bson.M{"_id":id})
}

// func collectionFindAllOverTime() ([]*OverTime, error){
// 	ctx, cancel := database.Ctx()
// 	defer cancel()
// 	aggregate := `[{"$lookup":{"from":"offices","localField":"office_id","foreignField":"_id","as":"office"}},{"$unwind":"$office"}]`
// 	pipline := 
// }

func collectionUpdateOverTime(overtime *OverTime) error {
	ctx, cancel := database.Ctx()
	defer cancel()
	cursor,err:=overtime_collection.UpdateOne(ctx,bson.M{"_id":overtime.Id},bson.M{"$set":overtime})
	if err!=nil {
		return err
	}
	if cursor.MatchedCount==0 {
		return fmt.Errorf("overtime id not found")
	}
	return nil
}

func collectionDeleteOverTime(id string) error {
	ctx, cancel := database.Ctx()
	defer cancel()
	cursor,err:=overtime_collection.DeleteOne(ctx,bson.M{"_id":id})
	if err!=nil {
		return err
	}
	if cursor.DeletedCount==0 {
		return fmt.Errorf("overtime id not found")
	}
	return nil
}