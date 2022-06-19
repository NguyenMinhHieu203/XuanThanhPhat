package employees

import (
	"fmt"
	shift "hrm/src/api/shifts"
	"hrm/src/lib"
	"strconv"
	"time"
)

func calDailySalary(daily_infos []*DailyInfo) int {
	daily_salary := 0
	for _, d := range daily_infos {
		daily_salary += d.SalaryDay - d.Fine
	}
	return daily_salary
}

func subTimeString(t string, u string) time.Duration {
	t = lib.StripNonNumberic(t)
	u = lib.StripNonNumberic(u)
	ht, _ := strconv.Atoi((t[:2]))
	mt, _ := strconv.Atoi((t[2:4]))
	hu, _ := strconv.Atoi((u[:2]))
	mu, _ := strconv.Atoi((u[2:4]))

	tt := time.Date(0, 0, 0, ht, mt, 0, 0, time.UTC)
	uu := time.Date(0, 0, 0, hu, mu, 0, 0, time.UTC)

	return tt.Sub(uu)
}

func (attendance *AttendanceFullInfoSchema) findShift(in Time, out Time) *shift.Shift {
	var temp time.Duration
	var shift *shift.Shift
	for _, s := range attendance.Shifts {
		late := subTimeString(in.DateTime[8:12], s.TimeIn)
		if late < 0 {
			late = 0
		}
		soon := subTimeString(out.DateTime[8:12], s.TimeOut)
		if soon > 0 {
			soon = 0
		}
		work_time := subTimeString(s.TimeOut, s.TimeIn)
		a := work_time - late + soon
		if a <= 0 {
			continue
		}
		if temp == 0 {
			temp = a
			shift = &s
		}
		if a > temp {
			temp = a
			shift = &s
		}
	}
	return shift
}

func (attendance *AttendanceFullInfoSchema) calDailySalary(times []Time) []*DailyInfo {
	var handled_time []Time
	for _, t := range times {
		if handled_time == nil {
			if t.Status == "1" {
				handled_time = append(handled_time, t)
			}
		} else if t.Status != handled_time[len(handled_time)-1].Status {
			handled_time = append(handled_time, t)
		}
	}
	if len(handled_time) < 2 {
		return nil
	}
	if len(handled_time)%2 == 1 {
		handled_time = handled_time[:len(handled_time)-1]
	}

	var daily_info []*DailyInfo
	for i := 0; i < len(handled_time)/2; i++ {
		in := handled_time[2*i]
		out := handled_time[2*i+1]
		var daily *DailyInfo
		s := attendance.findShift(in, out)
		if s == nil {
			continue
		}
		if len(handled_time)/2 > 1 {
			for _, d := range daily_info {
				if s.Name == d.Name {
					d.MiddleFreeTime = append(d.MiddleFreeTime, &MiddleFreeTime{
						From: d.Out,
						To:   in.DateTime,
					})
					d.Out = out.DateTime
					daily = d
					break
				}
			}
		}
		if daily == nil {
			daily = &DailyInfo{}
			daily_info = append(daily_info, daily)
			daily.WorkDay = 1.0
			daily.In = in.DateTime
			daily.Out = out.DateTime
			days,_ := lib.GetWorkDayOfMonth(in.DateTime[:6])
			daily.SalaryDay = (int(attendance.Office.BasicPay)+attendance.Allowance.CountTotalAllowance())/days
		}

		daily.Name = s.Name
		sub_in := subTimeString(daily.In[8:12], s.TimeIn)
		sub_out := subTimeString(daily.Out[8:12], s.TimeOut)
		daily.Late = fmt.Sprint(sub_in)
		daily.Soon = fmt.Sprint(-sub_out)
		var t time.Duration
		if daily.MiddleFreeTime != nil {
			for _, ft := range daily.MiddleFreeTime {
				t += subTimeString(ft.To[8:12], ft.From[8:12])
			}
		}
		if sub_in < 0 {
			sub_in = 0
		}
		if sub_out > 0 {
			sub_out = 0
		}

		worktime := subTimeString(s.TimeOut, s.TimeIn) - sub_in + sub_out - t

		daily.TimeFree = fmt.Sprint(t)
		if worktime < 7*30*time.Minute {
			daily.WorkDay = 0
		} else if worktime < 6*time.Hour {
			daily.WorkDay = 0.5
		} else {
			if sub_in >= time.Hour {
				daily.Fine -= 50000
			} else if sub_in >= 30*time.Minute {
				daily.Fine -= 20000
			} else {
				daily.Fine = 0
			}
			if sub_out <= -time.Hour {
				daily.Fine -= 50000
			} else if sub_out <= -30*time.Minute {
				daily.Fine -= 20000
			} else {
				daily.Fine = 0
			}
		}

	}
	return daily_info
}

func (attendance *AttendanceFullInfoSchema) CalSalary() (map[string]int, map[string][]*DailyInfo) {

	map_days := make(map[string][]Time)
	var days []string

	for _, time := range attendance.Times {
		day := time.DateTime[:8]
		if map_days[day] == nil {
			map_days[day] = make([]Time, 0)
		}
		map_days[day] = append(map_days[day], time)
		days = append(days, day)
	}
	daily_salary := make(map[string]int)
	daily_salary_info := make(map[string][]*DailyInfo)
	for _, d := range days {
		s := attendance.calDailySalary(map_days[d])
		dl := calDailySalary(s)
		daily_salary[d] = dl
		daily_salary_info[d] = s
	}

	return daily_salary, daily_salary_info
}
