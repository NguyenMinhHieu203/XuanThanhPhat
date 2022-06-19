package main

import (
	"hrm/src/api"
	database "hrm/src/config"
	"log"
	"os"

	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/cors"
	"github.com/joho/godotenv"
)

func main() {
	if err := godotenv.Load(); err != nil {
		log.Fatal("Error loading .env file")
		return
	}

	database.Connect()
	app := fiber.New()
	app.Static("/assets", "./assets")
	app.Use(cors.New())
	api.Init(app)
	app.Listen(":" + os.Getenv("PORT"))
}
