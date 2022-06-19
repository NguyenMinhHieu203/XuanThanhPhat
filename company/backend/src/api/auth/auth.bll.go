package auth

import (
	"fmt"
	"hrm/src/api/users"
	"hrm/src/lib"
	"os"
	"time"

	"github.com/golang-jwt/jwt/v4"
)

func GetToken(auth *Auth) (*string, error) {
	user,err := users.FindUserByUsername(auth.UserName)
	if err!=nil {
		return nil,err
	}
	if user != nil {
		pass_hashed := lib.Hash(auth.Password)
		if user.Password == pass_hashed {
			claims := jwt.MapClaims{
				"id":   user.ID,
				"role": user.Role,
				"exp":  time.Now().Add(time.Hour * 72).Unix(),
			}
			token := jwt.NewWithClaims(jwt.SigningMethodHS256, claims)
			if t, err := token.SignedString([]byte(os.Getenv("SECRET"))); err != nil {
				return nil, fmt.Errorf("server error")
			} else {
				return &t, nil
			}
		} else {
			return nil, fmt.Errorf("password wrong")
		}
	}
	return nil, fmt.Errorf("username not found")
}
