package users

import (
	"github.com/gofiber/fiber/v2"
	"hrm/src/lib"
)

func addUser(c *fiber.Ctx) error {
	new_user := new(AddUserSchema)

	if err := c.BodyParser(new_user); err != nil {
		return c.Status(400).JSON(err.Error())
	}
	if err := lib.ValidateStruct(new_user); len(err) > 0 {
		return c.Status(400).JSON(err)
	}

	id,err := AddUser(new_user)
	if err != nil {
		return c.Status(400).JSON(fiber.Map{
			"error": err.Error(),
		})
	}

	return c.Status(fiber.StatusCreated).JSON(fiber.Map{
		"id": id,
	})
}
