package allowance

import "fmt"

func (allowance *Allowance) CountTotalAllowance() int {
	total := 0
	for _, item := range allowance.AllowanceItems {
		total += item.Value
	}
	return total
}

func (allowance *Allowance) GetKeys() []string {
	var keys []string
	for _, k := range allowance.AllowanceItems {
		keys = append(keys, k.Name)
	}
	return keys
}

func (allowance *Allowance) GetValues() []string {
	var values []string
	for _, v := range allowance.AllowanceItems {
		values = append(values, fmt.Sprint(v.Value))
	}
	return values
}

func (allowance *Allowance) GetMap() map[string]int {
	res := make(map[string]int)

	for _, item := range allowance.AllowanceItems {
		res[item.Name] = item.Value
	}

	return res
}

func (allowance *Allowance) CalAllowance() int {
	total := 0
	for _,v := range allowance.AllowanceItems{
		total += v.Value
	}
	return total
}