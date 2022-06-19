package api

import (
	"hrm/src/api/allowance"
	"hrm/src/api/auth"
	"hrm/src/api/company"
	"hrm/src/api/employees"
	"hrm/src/api/offices"
	shift "hrm/src/api/shifts"
	"hrm/src/api/timekeeping"
	"hrm/src/api/users"

	"github.com/gofiber/fiber/v2"
)

func Init(app *fiber.App) {
	api := app.Group("/api")
	v1 := api.Group("/v1")

	auth.Init(&v1)
	users.Init(&v1)
	offices.Init(&v1)
	company.Init(&v1)
	employees.Init(&v1)
	shift.Init(&v1)
	timekeeping.Init(&v1)
	allowance.Init(&v1)
}
