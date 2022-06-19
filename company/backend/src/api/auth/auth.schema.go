package auth


type Auth struct {
	UserName		string			`validate:"required,min=8,max=32" json:"username"`
	Password		string 			`validate:"required,min=8,max=32" json:"password"`
}

