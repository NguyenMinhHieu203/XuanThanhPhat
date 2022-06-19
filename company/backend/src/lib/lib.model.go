package lib

type ErrorValidateResponse struct {
	At          string `json:"at,omitempty"`
	FailedField string `json:"feild,omitempty"`
	Error       string `json:"error,omitempty"`
}
