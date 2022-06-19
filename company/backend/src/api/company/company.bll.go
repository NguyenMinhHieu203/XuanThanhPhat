package company

import "hrm/src/lib"

func UpdateCompany(update_company_schema *UpdateCompanySchema) error {

	company, err := collectionGetCompany()
	if err != nil {
		return err
	}
	if update_company_schema.Name != nil {
		company.Name = *update_company_schema.Name
	}
	if update_company_schema.Phone != nil {
		company.Phone = *update_company_schema.Phone
	}
	if update_company_schema.Email != nil {
		company.Email = *update_company_schema.Email
	}
	if update_company_schema.Website != nil {
		company.Website = *update_company_schema.Website
	}
	if update_company_schema.Birthday != nil {
		company.Birthday = *update_company_schema.Birthday
	}
	if update_company_schema.Address!=nil {
		company.Address = *update_company_schema.Address
	}
	company.Mtime = lib.GetCurrentTime()
	return collectionUpdateCompany(company)
}