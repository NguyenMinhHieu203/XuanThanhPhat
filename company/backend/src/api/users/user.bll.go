package users

import (
	"crypto/sha256"
	"fmt"
	"hrm/src/api/employees"
	"hrm/src/lib"
)

func AddUser(new_user *AddUserSchema) (*string, error) {
	if user, _ := usersCollectionFindByUserName(new_user.UserName); user != nil {
		return nil, fmt.Errorf("username is exist")
	}

	user := User{}

	if new_user.EmployeeId != nil {
		if _, err := employees.FindEmployeeId(*new_user.EmployeeId); err != nil {
			return nil, fmt.Errorf("employee_id %v",err)
		}
		user.EmployeeId = *new_user.EmployeeId
	}

	user.ID = lib.Rand.Char(12)
	user.UserName = new_user.UserName
	user.Password = fmt.Sprintf("%x", sha256.Sum256([]byte(new_user.Password)))
	user.Role = new_user.Role
	user.IsActive = true
	user.Ctime = lib.GetCurrentTime()
	user.Mtime = user.Ctime

	if err := usersCollectionAddUser(&user); err != nil {
		return nil, err
	}
	return &user.ID, nil
}

func FindUserById(id string) (*User, error) {
	return usersCollectionFindUserById(id)
}

func FindUserByUsername(username string) (*User, error) {
	return usersCollectionFindByUserName(username)
}
