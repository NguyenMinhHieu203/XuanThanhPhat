package lib

import (
	"fmt"
	"strconv"
	"time"
)

func GetCurrentTime() string {
	t := time.Now()
	return fmt.Sprintf("%d%02d%02d%02d%02d%02d",
		t.Year(), t.Month(), t.Day(),
		t.Hour(), t.Minute(), t.Second())
}

func DayInMonth(yyyymm string) (int, error) {
	yyyymm = StripNonNumberic(yyyymm)
	year, err := strconv.Atoi(yyyymm[:4])
	if err != nil {
		return 0, err
	}
	month, err := strconv.Atoi(yyyymm[4:6])
	if err != nil {
		return 0, err
	}
	switch time.Month(month) {
	case time.April, time.June, time.September, time.November:
		return 30, nil
	case time.February:
		if year%4 == 0 && (year%100 != 0 || year%400 == 0) {
			return 29, nil
		}
		return 28, nil
	default:
		return 31, nil
	}
}

func GetWeekend(yyyymmdd string) (*time.Weekday, error) {
	yyyymmdd = StripNonNumberic(yyyymmdd)
	if len(yyyymmdd) != 8 {
		return nil, fmt.Errorf("time format wrong")
	}
	y, _ := strconv.Atoi(yyyymmdd[:4])
	m, _ := strconv.Atoi(yyyymmdd[4:6])
	d, _ := strconv.Atoi(yyyymmdd[6:8])
	t := time.Date(y, time.Month(m), d, 0, 0, 0, 0, time.UTC)
	weekday := t.Weekday()
	return &weekday, nil
}

func GetWorkDayOfMonth(yyyymm string) (int, error) {
	yyyymm = StripNonNumberic(yyyymm)
	num_day_of_month,err := DayInMonth(yyyymm)
	if err!=nil {
		return 0,err
	}
	y,_ := strconv.Atoi(yyyymm[:4])
	m,_ := strconv.Atoi(yyyymm[4:6])
	workdays := 0
	for i := 1; i <= num_day_of_month; i++ {
		t := time.Date(y,time.Month(m),i,0,0,0,0,time.UTC)
		w := int(t.Weekday())
		if w!=0&&w!=6 {
			workdays++
		}
	}
	return workdays,nil
}
