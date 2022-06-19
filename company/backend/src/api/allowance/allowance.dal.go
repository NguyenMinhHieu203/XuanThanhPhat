package allowance

import (
	"fmt"
	database "hrm/src/config"

	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/mongo"
)

var allowance_collection *mongo.Collection

func InitAllowanceCollection() {
	allowance_collection = database.MI.DB.Collection("allowance")
}

func collectionInsertAllowance(allowance *Allowance) error {
	ctx, cancel := database.Ctx()
	defer cancel()
	_, err := allowance_collection.InsertOne(ctx, allowance)
	return err
}

func collectionFind(filter bson.M) ([]*Allowance, error) {
	ctx, cancel := database.Ctx()
	defer cancel()
	cursor, err := allowance_collection.Find(ctx, filter)
	if err != nil {
		return nil, err
	}
	var allowances []*Allowance
	err = cursor.All(ctx, &allowances)
	return allowances, err
}

func collectionFindAllAllowance() ([]*Allowance, error) {
	return collectionFind(bson.M{})
}

func collectionFindOne(obj bson.M) (*Allowance, error) {
	ctx, cancel := database.Ctx()
	defer cancel()
	var allowance *Allowance
	err := allowance_collection.FindOne(ctx, obj).Decode(&allowance)
	return allowance, err
}

func collectionFindAllowanceById(id string) (*Allowance, error) {
	return collectionFindOne(bson.M{"_id": id})
}

func collectionUpdateOne(allowance *Allowance) error {
	ctx, cancel := database.Ctx()
	defer cancel()
	cursor, err := allowance_collection.UpdateOne(ctx, bson.M{"_id": allowance.Id}, bson.M{"$set": allowance})
	if err != nil {
		return err
	}
	if cursor.MatchedCount == 0 {
		return fmt.Errorf("allowance id not found")
	}
	return nil
}


func GetNames() (*AllowanceItemsName,error){
	ctx, cancel := database.Ctx()
	defer cancel()
	aggregate := `[{"$unwind":"$allowance_items"},{"$group":{"_id":"$allowance_items.name"}},{"$addFields":{"merge":0}},{"$group":{"_id":"$merge","keys":{"$push":"$_id"}}}]`
	var pipline []bson.M
	bson.UnmarshalExtJSON([]byte(aggregate), true, &pipline)
	cursor,err:=allowance_collection.Aggregate(ctx,pipline)
	if err!=nil {
		return nil,err
	}
	var res []AllowanceItemsName
	err = cursor.All(ctx,&res)
	if err!=nil {
		return nil,err
	}
	return &res[0],nil
}