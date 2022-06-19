package users

import "github.com/gofiber/fiber/v2"

func Init(router *fiber.Router) {
	initUsersCollection()
	user_router := (*router).Group("/user")
	user_router.Post("/", addUser)
}
