package auth

import (
	"os"

	"github.com/gofiber/fiber/v2"
	jwtware "github.com/gofiber/jwt/v3"
)

var JWTWARE func(*fiber.Ctx) error

func Init(router *fiber.Router) {
	JWTWARE = jwtware.New(jwtware.Config{
		SigningKey: []byte(os.Getenv("SECRET")),
	})
	auth_router := (*router).Group("/auth")
	auth_router.Post("/login", login)
	auth_router.Group("/me",JWTWARE)
	auth_router.Get("/me", restricted)
}
