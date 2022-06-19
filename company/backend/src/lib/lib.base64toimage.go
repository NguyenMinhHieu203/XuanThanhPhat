package lib

import (
	"encoding/base64"
	"fmt"
	"os"
)

func SaveImage(image_base_64 string) (string, error) {
	buf, err := base64.StdEncoding.DecodeString(image_base_64)
	if err != nil {
		return "", fmt.Errorf("decode base64 false: %v",err)
	}
	path := "assets/images/" + GetCurrentTime() + ".jpg"
	f, err := os.Create(path)
	defer func() {
		f.Close()
	}()
	if err != nil {
		return "", err
	}
	_, err = f.Write(buf)
	if err != nil {
		return "", err
	}
	return path, nil
}
