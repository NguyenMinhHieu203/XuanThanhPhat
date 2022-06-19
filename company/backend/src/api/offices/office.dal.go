package offices

import (
	"fmt"
	database "hrm/src/config"

	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/mongo"
)

var offices_collection *mongo.Collection

func initOfficesCollection() {
	offices_collection = database.MI.DB.Collection("offices")
}

func collectionInsertOne(office *Office) error {
	ctx, cancel := database.Ctx()
	defer cancel()
	_, err := offices_collection.InsertOne(ctx, office)
	return err
}

func collectionFindOne(obj bson.M) (*Office, error) {
	ctx, cancel := database.Ctx()
	defer cancel()
	var office *Office
	err := offices_collection.FindOne(ctx, obj).Decode(&office)
	return office, err
}

func collectionFindOfficeById(id string) (*Office, error) {
	return collectionFindOne(bson.M{"_id":id})
}

func collectionFindOfficeByCode(code string) (*Office, error) {
	return collectionFindOne(bson.M{"code":code})
}

func collectionFind(obj bson.M) ([]*OfficeFullInfoSchema, error) {
	ctx, cancel := database.Ctx()
	defer cancel()

	aggregate := `[{"$lookup":{"from":"shifts","localField":"shift_ids","foreignField":"_id","as":"shifts"}}]`
	var pipline []bson.M
	bson.UnmarshalExtJSON([]byte(aggregate),true,&pipline)
	pipline = append([]bson.M{{"$match":obj}}, pipline...)

	var offices []*OfficeFullInfoSchema
	cursor, err := offices_collection.Aggregate(ctx, pipline)
	if err != nil {
		return nil, err
	}
	err = cursor.All(ctx, &offices)
	return offices, err
}

func collectionFindAllOffice() ([]*OfficeFullInfoSchema, error) {
	return collectionFind(bson.M{})
}

func collectionUpdateOne(office *Office) error {
	ctx, cancel := database.Ctx()
	defer cancel()
	cursor, err := offices_collection.UpdateOne(ctx, bson.M{"_id": office.Id}, bson.M{"$set": office})
	if err != nil {
		return err
	}
	if cursor.MatchedCount == 0 {
		return fmt.Errorf("office id is not existed")
	}
	return nil
}

func collectionDeActiveOffice(id string) error {
	ctx, cancel := database.Ctx()
	defer cancel()
	cursor, err := offices_collection.UpdateOne(ctx, bson.M{"_id": id}, bson.M{"$set": bson.M{"is_active": false}})
	if err != nil {
		return err
	}
	if cursor.MatchedCount == 0 {
		return fmt.Errorf("office id is not existed")
	}
	return nil
}
