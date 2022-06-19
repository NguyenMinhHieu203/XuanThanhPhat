package offices

import "github.com/gofiber/fiber/v2"

func Init(router *fiber.Router) {
	initOfficesCollection()

	office_router:=(*router).Group("/office")

	office_router.Post("/", insertOffice)
	office_router.Get("/list", getAllOffice)
	office_router.Patch("/", updateOffice)
	office_router.Delete("/:id", deleteOffice)
}
