// package main

// import (
// 	"bytes"
// 	"crypto/tls"
// 	"encoding/json"
// 	"fmt"
// 	"hrm/src/api/timekeeping"
// 	"io"
// 	"net/http"
// 	"strings"
// 	"time"
// )

// func UnmarshalTransaction(data []byte) (Transaction, error) {
// 	var r Transaction
// 	err := json.Unmarshal(data, &r)
// 	return r, err
// }

// func (r *Transaction) Marshal() ([]byte, error) {
// 	return json.Marshal(r)
// }

// type Transaction struct {
// 	PageNumber    string         `json:"page_number"`
// 	TotalPages    string         `json:"total_pages"`
// 	TlogDBRecords []TlogDBRecord `json:"tlog_db_records"`
// 	ErrStatus     ErrStatus      `json:"err_status"`
// }

// type ErrStatus struct {
// 	Status string `json:"status"`
// 	ErrMsg string `json:"err_msg"`
// 	Type   string `json:"type"`
// }

// type TlogDBRecord struct {
// 	ActionStatus  string `json:"action_status"`
// 	DateTime      string `json:"date_time"`
// 	Name          string `json:"name"`
// 	FirstName     string `json:"first_name"`
// 	Channel       string `json:"channel"`
// 	Action        string `json:"action"`
// 	UseridCsn     string `json:"userid_csn"`
// 	MatchedFinger string `json:"matched_finger"`
// 	TnaKey        string `json:"tna_key"`
// 	ErrorCode     string `json:"error_code"`
// 	MatchingScore string `json:"matching_score"`
// 	UniqueID      string `json:"unique_id"`
// }

// var http_client *http.Client

// func initHttpClient() {
// 	transport := &http.Transport{
// 		TLSClientConfig: &tls.Config{InsecureSkipVerify: true},
// 	}
// 	http_client = &http.Client{Transport: transport}
// }

// func getSessionId() (*string, error) {
// 	data := `username=Admin&password=12345`
// 	resp, err := http_client.Post("https://192.168.1.253/cgi-bin/Login.cgi", "application/x-www-form-urlencoded", strings.NewReader(data))
// 	if err != nil {
// 		return nil, err
// 	}
// 	defer resp.Body.Close()
// 	body, _ := io.ReadAll(resp.Body)
// 	html := string(body)
// 	sub := "session_id="
// 	begin := strings.Index(html, sub)
// 	end := begin + strings.Index(html[begin:], ";")
// 	begin += len(sub)
// 	session_id := html[begin:end]
// 	return &session_id, nil
// }

// func getTransaction(session_id string) (*Transaction, error) {
// 	data := fmt.Sprintf(`{"page_number":0,"total_logs_per_page":"1000","get_device_config":"1","session_id":"%s","retrieve_delete_tlog":"1","filter":{"type":"1","actionStatus":"1","startDate":"","endDate":"","userId":"","logAction":"","photoEnable":"","read_status":"0","start_uid":"","end_uid":""},"sort_field":1,"sort_order":1,"tlog_format":1}`, session_id)
// 	fmt.Println(data)
// 	resp, err := http_client.Post("https://192.168.1.253/cgi-bin/MA5G_tlog_configurations.cgi", "application/x-www-form-urlencoded; charset=UTF-8", bytes.NewBuffer([]byte(data)))
// 	if err != nil {
// 		return nil, err
// 	}
// 	defer resp.Body.Close()
// 	body, _ := io.ReadAll(resp.Body)
// 	transaction, err := UnmarshalTransaction(body)
// 	return &transaction, err
// }

// func main() {
// 	// initHttpClient()
// 	// ssid,_ := getSessionId()
// 	// time.Sleep(1*time.Second)
// 	// transaction, err := getTransaction(*ssid)
// 	// fmt.Printf("%v, %v", transaction, err)
// 	timekeeping.ScanTransaction()
// 	for{
// 		time.Sleep(10*time.Second)
// 	}
// }

package main

import (
	"hrm/src/api"
	database "hrm/src/config"
	"log"

	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/cors"
	"github.com/joho/godotenv"
)

func main() {
	if err := godotenv.Load(); err != nil {
		log.Fatal("Error loading .env file")
		return
	}

	database.Connect()
	app := fiber.New()
	app.Static("/assets", "./assets")
	app.Use(cors.New())
	api.Init(app)
	// _, err := export(&employees.FilterAttendanceSchema{
	// 	Time: "202203",
	// })
	// fmt.Println(err)
}
