package timekeeping

import (
	"hrm/src/api/employees"
	"hrm/src/lib"

	"github.com/gofiber/fiber/v2"
)

func getAttandance(c *fiber.Ctx) error {
	var filter FilterSchema
	if err := c.QueryParser(&filter); err != nil {
		return c.Status(400).JSON(err.Error())
	}
	if err := lib.ValidateStruct(filter); err != nil {
		return c.Status(400).JSON(err)
	}
	attendances, err := GetAttandancesByFilter(&filter)
	if err != nil {
		return c.Status(400).JSON(err.Error())
	}
	return c.Status(200).JSON(attendances)
}

func getSalaries(c *fiber.Ctx) error {
	var filter employees.FilterAttendanceSchema
	err := c.QueryParser(&filter)
	if err!=nil {
		return c.Status(400).JSON(err.Error())
	}
	if err:= lib.ValidateStruct(filter);err!=nil {
		return c.Status(400).JSON(err)
	}
	salaries,err := fine(&filter)
	if err!=nil {
		return c.Status(400).JSON(err.Error())
	}
	return c.Status(200).JSON(salaries)
}

func getExportExelSalaries(c *fiber.Ctx) error {
	var filter employees.FilterAttendanceSchema
	err := c.QueryParser(&filter)
	if err!=nil {
		return c.Status(400).JSON(err.Error())
	}
	if err:= lib.ValidateStruct(filter);err!=nil {
		return c.Status(400).JSON(err)
	}
	salaries,err := export(&filter)
	if err!=nil {
		return c.Status(400).JSON(err.Error())
	}
	return c.Status(200).JSON(salaries)
}
