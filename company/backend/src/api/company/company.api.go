package company

import (
	"hrm/src/lib"

	"github.com/gofiber/fiber/v2"
)

func getCompany(c *fiber.Ctx)error{
	company,err:=collectionGetCompany()
	if err!=nil {
		return c.Status(400).JSON(err.Error())
	}
	return c.Status(200).JSON(company)
}

func updateCompany(c *fiber.Ctx)error{
	var update_company_schema *UpdateCompanySchema
	if err:=c.BodyParser(&update_company_schema);err!=nil {
		return c.Status(400).JSON(err.Error())
	}
	if err:=lib.ValidateStruct(update_company_schema);err!=nil {
		return c.Status(400).JSON(err)
	}
	err:=UpdateCompany(update_company_schema)
	if err!=nil {
		c.Status(400).JSON(err.Error())
	}
	return c.Status(200).JSON(1)
}