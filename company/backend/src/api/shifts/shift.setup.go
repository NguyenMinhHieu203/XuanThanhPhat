package shift

import "github.com/gofiber/fiber/v2"

func Init(router *fiber.Router){
	initShiftsCollection()

	shift_route:=(*router).Group("/shift")

	shift_route.Post("/",addShift)
	shift_route.Get("/list",getAllShifts)
	shift_route.Patch("/",updateShift)
	shift_route.Delete("/:id",deleteShift)
}