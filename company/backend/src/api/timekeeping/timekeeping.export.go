package timekeeping

import (
	"fmt"
	"hrm/src/api/employees"
	"hrm/src/lib"
	"strconv"
	"strings"

	"github.com/xuri/excelize/v2"
)

func export(filter *employees.FilterAttendanceSchema) (*string, error) {
	f, err := excelize.OpenFile("assets/sample/sample.xlsx")
	if err != nil {
		return nil, err
	}
	bang_luong := "Bảng lương"
	bang_cham_cong := "BCC"
	map_salary := getMapSalary(f, bang_luong)

	month, _ := strconv.Atoi(filter.Time[4:6])
	year, _ := strconv.Atoi(filter.Time[:4])
	f.SetCellValue(bang_cham_cong, "A6", month)
	f.SetCellValue(bang_cham_cong, "B6", year)
	payroll, err := GetPayrollData(filter)
	if err != nil {
		return nil, err
	}

	payroll_map := make(map[string][]*PayrollSchema)
	var office_names []string
	for _, p := range payroll {
		key := p.Office.Name
		if payroll_map[key] == nil {
			office_names = append(office_names, p.Office.Name)
		}
		payroll_map[key] = append(payroll_map[key], p)
	}

	row := 10
	addSubTotalFumula(f, bang_cham_cong, row, len(payroll)+len(office_names), 34, 41)
	addSubTotalFumula(f, bang_luong, row, len(payroll)+len(office_names), 4, 20)

	for i, name := range office_names {
		row++
		f.DuplicateRowTo(bang_cham_cong, 11, row)
		f.SetCellValue(bang_cham_cong, lib.Cells(row, 1), i+1)
		f.SetCellValue(bang_cham_cong, lib.Cells(row, 2), name)

		addSubTotalFumula(f, bang_cham_cong, row, len(payroll_map[name]), 34, 41)

		f.DuplicateRowTo(bang_luong, 11, row)
		f.SetCellValue(bang_luong, lib.Cells(row, 1), name)

		addSubTotalFumula(f, bang_luong, row, len(payroll_map[name]), 4, 20)

		for i, v := range payroll_map[name] {
			row++
			f.DuplicateRowTo(bang_cham_cong, 12, row)
			f.SetCellValue(bang_cham_cong, lib.Cells(row, 1), i+1)
			f.SetCellValue(bang_cham_cong, lib.Cells(row, 2), v.Employee.Code)
			f.SetCellValue(bang_cham_cong, lib.Cells(row, 3), v.Employee.FullName)
			fillTimeSheetInfo(f, bang_cham_cong, filter.Time, row, v)
			editFomula(f, bang_cham_cong, row, 35, 41)

			f.DuplicateRowTo(bang_luong, 12, row)
			f.SetCellValue(bang_luong, lib.Cells(row, 1), i+1)
			f.SetCellValue(bang_luong, lib.Cells(row, 2), v.Employee.FullName)
			f.SetCellValue(bang_luong, lib.Cells(row, 3), v.Employee.Regency)
			fillPayrollInfo(f, bang_luong, v, map_salary, row)
			editFomula(f, bang_luong, row, 4, 20)
		}
	}
	f.UpdateLinkedValue()
	link := fmt.Sprintf("assets/documents/%s.xlsx", lib.GetCurrentTime())
	f.SaveAs(link)
	return &link, nil
}

func getMapSalary(f *excelize.File, sheet string) map[string]int {
	res := make(map[string]int)
	cols, _ := f.Cols(sheet)
	for i := 1; i <= cols.TotalCols(); i++ {
		asis := lib.Cells(8, i)
		value, err := f.GetCellValue(sheet, asis)
		if err == nil {
			res[value] = i
		}
	}
	return res
}

func fillTimeSheetInfo(f *excelize.File, sheet string, time string, row int, payroll *PayrollSchema) {
	for i := 1; i < 32; i++ {
		col := i + 3
		asis := lib.Cells(row, col)
		day := strconv.Itoa(i)
		if i < 10 {
			day = "0" + day
		}
		day = time + day
		fine := payroll.FineInfo[day]
		value := ""
		fine_fee := 0
		var workday float32
		for _, v := range fine {
			workday += v.WorkDay
			fine_fee += v.Fine
		}
		switch workday {
		case 1:
			value = "x"
		case 0.5:
			value = "x/2"
		}
		if fine_fee != 0 {
			f.AddComment(sheet, asis, fmt.Sprintf(`{"text": "Phạt đi muộn: %d\n\n\n\n","author":"*"}`, fine_fee))
		}
		f.SetCellValue(sheet, asis, value)
	}
}

func fillPayrollInfo(f *excelize.File, sheet string, payroll *PayrollSchema, map_salary map[string]int, row int) {
	al := payroll.Allowance.GetMap()
	al["Lương cơ bản"] = int(float64(payroll.Office.BasicPay) * payroll.Employee.CoefficientSalary)
	for k, v := range al {
		col := map_salary[k]
		if col > 0 {
			asis := lib.Cells(row, col)
			f.SetCellValue(sheet, asis, v)
		}
	}
}

func addSubTotalFumula(f *excelize.File, sheet string, row_start int, num_row int, col_start int, col_end int) {
	for col := col_start; col <= col_end; col++ {
		asis := lib.Cells(row_start, col)
		col_alpha := lib.StripNonAlpha(asis)
		end_row := row_start + num_row
		formula := fmt.Sprintf(`=SUBTOTAL(9,%s%d:%s%d)`, col_alpha, row_start+1, col_alpha, end_row)
		f.SetCellFormula(sheet, asis, formula)
	}
}

func editFomula(f *excelize.File, sheet string, row int, col_start int, col_end int) {
	for col := col_start; col <= col_end; col++ {
		asis := lib.Cells(row, col)
		formula, _ := f.GetCellFormula(sheet, asis)
		formula = strings.ReplaceAll(formula, "12", strconv.Itoa(row))
		f.SetCellFormula(sheet, asis, formula)
	}
}
