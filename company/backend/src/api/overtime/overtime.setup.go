package overtime

import "github.com/gofiber/fiber/v2"

func Init(router *fiber.Router){
	initOverTimeCollection()
	
}