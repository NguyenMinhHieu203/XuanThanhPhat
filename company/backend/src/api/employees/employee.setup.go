package employees

import "github.com/gofiber/fiber/v2"

func Init(router *fiber.Router) {
	initEmployeesCollection()
	employee_router:=(*router).Group("/employee")
	employee_router.Post("/",addEmployee)
	employee_router.Get("/list",getAllEmployees)
	employee_router.Patch("/",updateEmployee)
	employee_router.Get("/:id",getEmployee)
	employee_router.Delete("/:id",deleteEmployee)
}