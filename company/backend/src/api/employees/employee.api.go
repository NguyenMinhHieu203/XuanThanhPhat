package employees

import (
	"hrm/src/lib"

	"github.com/gofiber/fiber/v2"
)

func addEmployee(c *fiber.Ctx) error {
	var add_employee_collection AddEmployeeSchema
	if err := c.BodyParser(&add_employee_collection); err != nil {
		return c.Status(400).JSON(err.Error())
	}
	if err := lib.ValidateStruct(add_employee_collection); err != nil {
		return c.Status(400).JSON(err)
	}
	id, err := InsertEmployee(&add_employee_collection)
	if err != nil {
		return c.Status(400).JSON(err.Error())
	}
	return c.Status(201).JSON(id)
}

func getAllEmployees(c *fiber.Ctx) error {
	employees, err := FindAllEmployees()
	if err != nil {
		return c.Status(400).JSON(err.Error())
	}
	return c.Status(200).JSON(employees)
}

func updateEmployee(c *fiber.Ctx) error {
	var update_employee_schema UpdateEmployeeSchema
	if err := c.BodyParser(&update_employee_schema); err != nil {
		return c.Status(400).JSON(err.Error())
	}
	if err := lib.ValidateStruct(update_employee_schema); err != nil {
		return c.Status(400).JSON(err)
	}
	err := UpdateEmployee(&update_employee_schema)
	if err != nil {
		return c.Status(400).JSON(err.Error())
	}
	return c.Status(200).JSON(1)
}

func getEmployee(c *fiber.Ctx) error {
	id := c.Params("id")
	if id=="" {
		c.Status(400).JSON("params employee id must be required")
	}
	employee,err := collectionFindEmployeeFullInfoById(id)
	if err!=nil {
		return c.Status(400).JSON(err.Error())
	}
	return c.Status(200).JSON(employee)
}

func deleteEmployee(c *fiber.Ctx) error {
	id := c.Params("id")
	if id=="" {
		c.Status(400).JSON("params employee id must be required")
	}
	err := collectionDeActiveEmployee(id)
	if err!=nil {
		return c.Status(400).JSON(err.Error())
	}
	return c.Status(200).JSON(1)
}
