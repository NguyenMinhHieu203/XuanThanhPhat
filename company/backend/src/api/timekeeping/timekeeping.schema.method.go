package timekeeping



// func (salary *SalarySchema) GetTotalDailySalary() int {
// 	total := 0
// 	for _, v := range salary.DailySalary {
// 		total += v
// 	}
// 	return total
// }

// func (salary *SalarySchema) GetInComming() int {
// 	return salary.GetTotalDailySalary() + salary.Allowance.CountTotalAllowance()
// }


func (salary *SalarySchema) GetTotalInComming() int {
	return int(salary.Office.BasicPay)+salary.Allowance.CountTotalAllowance()
}

func (fine *FineInfoSchema) GetTotalFine() int {
	total_fine := 0
	for _, fineinfo := range fine.FineInfo {
		for _, v := range fineinfo {
			total_fine += v.Fine
		}
	}
	return total_fine
}

func (fine *FineInfoSchema) GetTotalWorkDay() float32 {
	var workday float32
	for _, fineinfo := range fine.FineInfo {
		for _, v := range fineinfo {
			workday += v.WorkDay
		}
	}
	return workday
}