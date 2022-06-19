package timekeeping

import (
	"bytes"
	"crypto/tls"
	"fmt"
	"hrm/src/lib"
	"io"
	"net/http"
	"strings"
	"time"
)

var http_client *http.Client
var JsonUnmarsTransactError error
var InternalServerError error

const (
	morpho_url                     = "https://192.168.1.254"
	morpho_user_pass_payload       = "username=Admin&password=12345"
	morpho_login_endpoint          = "/cgi-bin/login.cgi"
	morpho_url_get_tlog_payload    = `{"page_number":-1,"total_logs_per_page":"1000","get_device_config":"1","session_id":"%s","retrieve_delete_tlog":"1","filter":{"type":"1","actionStatus":"1","startDate":"","endDate":"","userId":"","logAction":"","photoEnable":"","read_status":"0","start_uid":"","end_uid":""},"sort_field":1,"sort_order":1,"tlog_format":1}`
	morpho_url_delete_tlog_payload = `{"get_device_config":"1","session_id":"%s","retrieve_delete_tlog":"2","filter":{"type":"0","actionStatus":"","startDate":"","endDate":"","userId":"","logAction":"","photoEnable":"","read_status":"0","start_uid":"","end_uid":""},"sort_field":1,"sort_order":1}`

	vison_pass_url                     = "https://192.168.1.253"
	vison_pass_user_pass_payload       = "username=Admin&password=12345"
	vison_pass_login_endpoint          = "/cgi-bin/Login.cgi"
	vison_pass_url_get_tlog_payload    = `{"page_number":0,"total_logs_per_page":"1000","get_device_config":"1","session_id":"%s","retrieve_delete_tlog":"1","filter":{"type":"1","actionStatus":"1","startDate":"","endDate":"","userId":"","logAction":"","photoEnable":"","read_status":"0","start_uid":"","end_uid":""},"sort_field":1,"sort_order":1,"tlog_format":1}`
	vison_pass_url_delete_tlog_payload = `{"get_device_config":"1","session_id":"%s","retrieve_delete_tlog":"2","filter":{"type":"0","actionStatus":"","startDate":"","endDate":"","userId":"","logAction":"","photoEnable":"","read_status":"0","start_uid":"","end_uid":""},"sort_field":1,"sort_order":1}`
)

type device struct {
	user_pass           string
	ssid                string
	device_url          string
	login_endpoint      string
	get_tlog_payload    string
	delete_tlog_payload string
}

func initHttpClient() {
	transport := &http.Transport{
		TLSClientConfig: &tls.Config{InsecureSkipVerify: true},
	}
	http_client = &http.Client{Transport: transport}
}

func (d *device) getSessionId() error {
	data := `username=Admin&password=12345`
	resp, err := http_client.Post(d.device_url+d.login_endpoint, "application/x-www-form-urlencoded", strings.NewReader(data))
	if err != nil {
		return err
	}
	defer resp.Body.Close()
	body, err := io.ReadAll(resp.Body)
	if err != nil {
		return err
	}
	if len(body) == 0 {
		return fmt.Errorf("not data response %s", resp.Status)
	}
	html := string(body)
	sub := "session_id="
	begin := strings.Index(html, sub)
	if begin < 0 {
		return fmt.Errorf("not found session id")
	}
	end := begin + strings.Index(html[begin:], ";")
	begin += len(sub)
	session_id := html[begin:end]
	if session_id == "0" {
		return fmt.Errorf("not found session id")
	}
	d.ssid = session_id
	return nil
}

func (d *device) getTransaction() (*Transaction, error) {
	payload := fmt.Sprintf(d.get_tlog_payload, d.ssid)
	resp, err := http_client.Post(d.device_url+"/cgi-bin/MA5G_tlog_configurations.cgi", "application/x-www-form-urlencoded", bytes.NewBuffer([]byte(payload)))
	if err != nil {
		if d.device_url == morpho_url {
			fmt.Printf("%v\n", err)
		}
		return nil, err
	}
	defer resp.Body.Close()
	body, _ := io.ReadAll(resp.Body)
	transaction, err := UnmarshalTransaction(body)
	if err != nil {
		err = JsonUnmarsTransactError
	}
	return &transaction, err
}

func (d *device) deleteAllTransaction() error {
	payload := fmt.Sprintf(d.delete_tlog_payload, d.ssid)
	resp, err := http_client.Post(d.device_url+"/cgi-bin/MA5G_tlog_configurations.cgi", "application/x-www-form-urlencoded", bytes.NewBuffer([]byte(payload)))
	body, _ := io.ReadAll(resp.Body)
	htm := string(body)
	if strings.HasSuffix(htm, "500 - Internal Server Error") {
		return fmt.Errorf("500 - Internal Server Error")
	}
	return err
}

func (d *device) addAttendance() {
	for {
		if d.ssid == "" {
			if err := d.getSessionId(); err != nil {
				time.Sleep(time.Duration(5 * time.Second))
				continue
			}
		}
		time.Sleep(time.Duration(30 * time.Second))
		transaction, err := d.getTransaction()
		if err != nil {
			if err == JsonUnmarsTransactError {
				continue
			}
			d.ssid = ""
		}
		if len(transaction.TlogDBRecords) > 0 {
			err = d.deleteAllTransaction()
			if err != nil {
				if err!=InternalServerError {
					d.ssid = ""
				}
				continue
			}
			for _, record := range transaction.TlogDBRecords {
				var attendance Attendance
				attendance.UserId = record.UseridCsn
				attendance.Status = record.TnaKey
				attendance.DateTime = record.DateTime
				attendance.Ctime = lib.GetCurrentTime()
				collectionUpsertAttendance(&attendance)
			}
		}
	}
}

func (d *device) run() {
	go d.addAttendance()
}

func ScanTransaction() {
	JsonUnmarsTransactError = fmt.Errorf("JSON Unmarshal Transaction Error")
	InternalServerError = fmt.Errorf("500 - Internal Server Error")
	initHttpClient()
	devices := []device{
		{
			user_pass:           morpho_user_pass_payload,
			device_url:          morpho_url,
			login_endpoint:      morpho_login_endpoint,
			get_tlog_payload:    morpho_url_get_tlog_payload,
			delete_tlog_payload: morpho_url_delete_tlog_payload,
		},
		{
			user_pass:           vison_pass_user_pass_payload,
			device_url:          vison_pass_url,
			login_endpoint:      vison_pass_login_endpoint,
			get_tlog_payload:    vison_pass_url_get_tlog_payload,
			delete_tlog_payload: vison_pass_url_delete_tlog_payload,
		},
	}

	devices[0].run()
	devices[1].run()
}
