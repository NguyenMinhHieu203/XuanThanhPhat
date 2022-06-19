package allowance

import "github.com/gofiber/fiber/v2"

func Init(router *fiber.Router){
	InitAllowanceCollection()
	allowance_route := (*router).Group("/allowance")
	allowance_route.Post("/",addAllowance)
	allowance_route.Get("/list",getListAllowance)
	allowance_route.Patch("/",updateAllowance)
	allowance_route.Get("/names",getAllowanceItemNames)
}