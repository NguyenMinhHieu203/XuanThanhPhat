package lib

import (
	"regexp"
)

func StripNonNumberic(in string) string {
	reg, _ := regexp.Compile("[^0-9]+")
	return reg.ReplaceAllString(in, "")
}

func StripNonAlpha(in string) string {
	reg, _ := regexp.Compile("[^A-Za-z]+")
	return reg.ReplaceAllString(in, "")
}