package allowance

type AllowanceItemsName struct {
	Keys []string `bson:"keys"`
}

type AllowanceItem struct {
	Name  string `validate:"required" json:"name"`
	Value int    `validate:"required" json:"value"`
}

type Allowance struct {
	Id             string          `json:"id" bson:"_id"`
	Note           string          `json:"note" bson:"note"`
	AllowanceItems []AllowanceItem `json:"allowance_items" bson:"allowance_items"`
	Ctime          string          `json:"ctime" bson:"ctime"`
	Mtime          string          `json:"mtime" bson:"mtime"`
}

type AddAllowanceSchema struct {
	Note           string          `validate:"required" json:"note"`
	AllowanceItems []AllowanceItem `validate:"required" json:"allowance_items"`
}

type UpdateAllowanceSchema struct {
	Id             string          `validate:"required" json:"id"`
	Note           *string         `validate:"omitempty" json:"note"`
	AllowanceItems []AllowanceItem `validate:"omitempty" json:"allowance_items"`
}
