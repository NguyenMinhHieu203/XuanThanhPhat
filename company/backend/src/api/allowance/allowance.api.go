package allowance

import (
	"hrm/src/lib"

	"github.com/gofiber/fiber/v2"
)

func addAllowance(c *fiber.Ctx) error {
	var add_allowance_schema AddAllowanceSchema
	if err := c.BodyParser(&add_allowance_schema); err != nil {
		return c.Status(400).JSON(err.Error())
	}
	if err := lib.ValidateStruct(add_allowance_schema); err != nil {
		return c.Status(400).JSON(err)
	}
	id, err := InsertAllowance(&add_allowance_schema)
	if err != nil {
		return c.Status(400).JSON(err.Error())
	}
	return c.Status(201).JSON(id)
}

func getListAllowance(c *fiber.Ctx) error {
	allowances,err := collectionFindAllAllowance()
	if err!=nil {
		return c.Status(400).JSON(err.Error())
	}
	return c.Status(200).JSON(allowances)
}

func updateAllowance(c *fiber.Ctx) error {
	var update_allowance_schema UpdateAllowanceSchema
	if err := c.BodyParser(&update_allowance_schema); err != nil {
		return c.Status(400).JSON(err.Error())
	}
	if err := lib.ValidateStruct(update_allowance_schema); err != nil {
		return c.Status(400).JSON(err)
	}
	err := UpdateAllowance(&update_allowance_schema)
	if err != nil {
		return c.Status(400).JSON(err.Error())
	}
	return c.Status(200).JSON(1)
}

func getAllowanceItemNames(c *fiber.Ctx) error {
	names,err := GetNames()
	if err !=nil {
		return c.Status(400).JSON(err.Error())
	}
	return c.Status(200).JSON(names)
}
