package lib

import (
	"crypto/sha256"
	"fmt"
)

func Hash(str string) string {
	return fmt.Sprintf("%x", sha256.Sum256([]byte(str)))
}

func HashByte(data []byte) string {
	return fmt.Sprintf("%x", sha256.Sum256(data))
}
