package shift

import (
	"hrm/src/lib"

	"github.com/gofiber/fiber/v2"
)

func addShift(c *fiber.Ctx) error {
	var add_shift_schema AddShiftSchema
	if err:=c.BodyParser(&add_shift_schema);err!=nil{
		return c.Status(400).JSON(err.Error())
	}
	if err:=lib.ValidateStruct(add_shift_schema);err!=nil{
		return c.Status(400).JSON(err)
	}
	id,err:=InsertShift(&add_shift_schema)
	if err!=nil {
		return c.Status(400).JSON(err.Error())
	}
	return c.Status(201).JSON(id)
}

func getAllShifts(c *fiber.Ctx) error {
	shifts,err := FindAllShifts()
	if err!=nil {
		return c.Status(400).JSON(err.Error())
	}
	return c.Status(200).JSON(shifts)
}

func updateShift(c *fiber.Ctx) error {
	var update_shift_schema UpdateShiftSchema
	if err:=c.BodyParser(&update_shift_schema);err!=nil{
		return c.Status(400).JSON(err.Error())
	}
	if err:=lib.ValidateStruct(update_shift_schema);err!=nil {
		return c.Status(400).JSON(err)
	}
	if err:=UpdateShift(&update_shift_schema);err!=nil {
		return c.Status(400).JSON(err.Error())
	}
	return c.Status(200).JSON(1)
}

func deleteShift(c *fiber.Ctx)error{
	id := c.Params("id")
	if id=="" {
		c.Status(400).JSON("params shift id must be required")
	}
	err := collectionDeActiveShift(id)
	if err!=nil {
		return c.Status(400).JSON(err.Error())
	}
	return c.Status(200).JSON(1)
}