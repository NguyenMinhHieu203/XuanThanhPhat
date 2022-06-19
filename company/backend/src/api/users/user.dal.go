package users

import (
	database "hrm/src/config"

	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/mongo"
)

var users_collection *mongo.Collection

func initUsersCollection() {
	users_collection = database.MI.DB.Collection("users")
}

func usersCollectionAddUser(user *User) error {
	ctx, cancel := database.Ctx()
	defer cancel()
	_, err := users_collection.InsertOne(ctx, user)
	return err
}

func usersCollectionFindUserById(id string) (*User,error) {
	ctx, cancel := database.Ctx()
	defer cancel()
	user := User{}
	if err := users_collection.FindOne(ctx, bson.M{"_id": id}).Decode(&user); err != nil {
		return nil,err
	}
	return &user,nil
}

func usersCollectionFindByUserName(username string) (*User,error) {
	ctx, cancel := database.Ctx()
	defer cancel()
	user := User{}
	if err := users_collection.FindOne(ctx, bson.M{"username": username}).Decode(&user); err != nil {
		return nil,err
	}
	return &user,nil
}
