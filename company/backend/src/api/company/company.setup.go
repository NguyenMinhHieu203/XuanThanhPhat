package company

import "github.com/gofiber/fiber/v2"

func Init(router *fiber.Router){
	initCompanyCollection()
	company_router := (*router).Group("/company")
	company_router.Get("/",getCompany)
	company_router.Patch("/",updateCompany)
}