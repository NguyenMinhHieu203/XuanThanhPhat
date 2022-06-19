package offices

import (
	"hrm/src/lib"

	"github.com/gofiber/fiber/v2"
)

func insertOffice(c *fiber.Ctx) error {
	var add_office_schema *AddOfficeSchema
	if err := c.BodyParser(&add_office_schema); err != nil {
		return c.Status(400).JSON(err.Error())
	}
	if err:=lib.ValidateStruct(add_office_schema);err!=nil {
		return c.Status(400).JSON(err)
	}
	id,err:=InsertOffice(add_office_schema)
	if err!=nil {
		return c.Status(400).JSON(err.Error())
	}
	return c.Status(201).JSON(id)
}

func getAllOffice(c *fiber.Ctx) error {
	offices,err:=FindAllOffice()
	if err != nil {
		return c.Status(400).JSON(err.Error())
	}
	return c.Status(200).JSON(offices)
}

func updateOffice(c *fiber.Ctx) error {
	var update_office_schema UpdateOfficeSchema
	if err := c.BodyParser(&update_office_schema); err != nil {
		return c.Status(400).JSON(err.Error())
	}
	if err:=lib.ValidateStruct(update_office_schema);err!=nil {
		return c.Status(400).JSON(err)
	}
	err := UpdateOffice(&update_office_schema)
	if err!=nil {
		return c.Status(400).JSON(err.Error())
	}
	return c.Status(200).JSON(1)
}

func deleteOffice(c *fiber.Ctx) error {
	id := c.Params("id")
	if id=="" {
		c.Status(400).JSON("params office id must be required")
	}
	err := collectionDeActiveOffice(id)
	if err!=nil {
		return c.Status(400).JSON(err.Error())
	}
	return c.Status(200).JSON(1)
}