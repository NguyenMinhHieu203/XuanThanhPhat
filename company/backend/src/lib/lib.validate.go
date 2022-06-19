package lib

import "github.com/go-playground/validator/v10"

func ValidateStruct(s interface{}) []*ErrorValidateResponse {
	var errors []*ErrorValidateResponse
	validate := validator.New()
	err := validate.Struct(s)
	if err != nil {
		for _, err := range err.(validator.ValidationErrors) {
			var element ErrorValidateResponse
			element.At = err.StructNamespace()
			element.Error = err.Field() + " must be formated as " + err.Tag()
			errors = append(errors, &element)
		}
	}
	return errors
}
