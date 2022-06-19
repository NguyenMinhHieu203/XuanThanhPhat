package lib

import "strconv"

func Cells(row int, col int) string {
	letters := [26]string{"A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"}
	var let, let2, let3, letter string
	var i, i2, i3 int
	for _, let = range letters {
		i++
		if col == i {
			letter = let
		}
		for _, let2 = range letters {
			i2++
			if col-26 == i2 {
				letter = let + let2
			}
			for _, let3 = range letters {
				i3++
				if col-702 == i3 {
					letter = let + let2 + let3
				}
			}
		}
	}
	rows := strconv.Itoa(row)
	return letter + rows
}

func Alpha(num int) string {
	letters := []string{"A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"}
	var res string
	for  {
		sub := num%26
		num /= 26
		
		if num == 0 {
			res = letters[sub-1]+res
			return res
		}
		res = letters[sub]+res
	}
}
