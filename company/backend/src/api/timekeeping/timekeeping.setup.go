package timekeeping

import "github.com/gofiber/fiber/v2"

func Init(router *fiber.Router) {
	ScanTransaction()
	InitTimeKeepingCollection()
	timekeeping_route := (*router).Group("/timekeeping")
	timekeeping_route.Get("/list",getAttandance)
	timekeeping_route.Get("/salaries", getSalaries)
	timekeeping_route.Get("/salaries/export", getExportExelSalaries)
}
