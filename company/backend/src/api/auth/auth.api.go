package auth

import (
	"fmt"
	"hrm/src/api/users"

	"github.com/gofiber/fiber/v2"
	"github.com/golang-jwt/jwt/v4"
)

func login(c *fiber.Ctx) error {
	auth := new(Auth)
	if err := c.BodyParser(auth); err != nil {
		return c.Status(400).JSON(err)
	}
	if token, err := GetToken(auth); err != nil {
		return c.Status(403).JSON(err.Error())
	} else {
		return c.Status(200).JSON(fiber.Map{
			"token": token,
		})
	}
}

func restricted(c *fiber.Ctx) error {
	usr := c.Locals("user").(*jwt.Token)
	claims := usr.Claims.(jwt.MapClaims)
	id := fmt.Sprint(claims["id"])
	user_info, err := users.FindUserById(id)
	if err != nil {
		return c.Status(400).JSON(err.Error())
	}
	return c.Status(200).JSON(user_info)
}
