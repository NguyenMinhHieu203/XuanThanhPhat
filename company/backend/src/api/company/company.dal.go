package company

import (
	database "hrm/src/config"
	"hrm/src/lib"

	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/mongo"
)

var company_collection *mongo.Collection

func initCompanyCollection() {
	company_collection = database.MI.DB.Collection("company")
	checkAddCompany()
}

func checkAddCompany() {
	ctx, cancel := database.Ctx()
	defer cancel()
	err := company_collection.FindOne(ctx, bson.M{}).Err()
	if err == nil {
		return
	}
	curr_time := lib.GetCurrentTime()
	company := Company{
		Id:       lib.Rand.Char(12),
		Name:     "XTP",
		Phone:    "000000000000",
		Email:    "example@company.com",
		Website:  "https://company.com",
		Address:  "",
		Birthday: curr_time,
		Ctime:    curr_time,
		Mtime:    curr_time,
	}
	_, err = company_collection.InsertOne(ctx, &company)
	if err != nil {
		panic(err)
	}
}

func collectionGetCompany() (*Company, error) {
	ctx, cancel := database.Ctx()
	defer cancel()
	var company *Company
	err := company_collection.FindOne(ctx, bson.M{}).Decode(&company)
	if err != nil {
		return nil, err
	}
	return company, nil
}

func collectionUpdateCompany(company *Company) error {
	ctx, cancel := database.Ctx()
	defer cancel()
	_, err := company_collection.UpdateOne(ctx, bson.M{}, bson.M{"$set": company})
	if err != nil {
		return err
	}
	return nil
}
