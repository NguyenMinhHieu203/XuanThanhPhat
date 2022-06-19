package timekeeping

import "encoding/json"

func UnmarshalTransaction(data []byte) (Transaction, error) {
	var r Transaction
	err := json.Unmarshal(data, &r)
	return r, err
}

func (r *Transaction) Marshal() ([]byte, error) {
	return json.Marshal(r)
}

type Transaction struct {
	PageNumber    string         `json:"page_number"`
	TotalPages    string         `json:"total_pages"`
	TlogDBRecords []TlogDBRecord `json:"tlog_db_records,omitempty"`
	ErrStatus     ErrStatus      `json:"err_status"`
}

type ErrStatus struct {
	Status string `json:"status"`
	ErrMsg string `json:"err_msg"`
	Type   string `json:"type"`
}

type TlogDBRecord struct {
	ActionStatus  string `json:"action_status"`
	DateTime      string `json:"date_time"`
	Name          string `json:"name"`
	FirstName     string `json:"first_name"`
	Channel       string `json:"channel"`
	Action        string `json:"action"`
	UseridCsn     string `json:"userid_csn"`
	MatchedFinger string `json:"matched_finger"`
	TnaKey        string `json:"tna_key"`
	ErrorCode     string `json:"error_code"`
	MatchingScore string `json:"matching_score"`
	UniqueID      string `json:"unique_id"`
}
