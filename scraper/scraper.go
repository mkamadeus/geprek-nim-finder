package main

import (
	"fmt"
	"log"
	"encoding/json"
	"database/sql"
	"os"
	_ "github.com/lib/pq"
)

const (
	host = "localhost"
	port = 5432
	user = "postgres"
	password = "password"
	dbname = "students"
)

type studentData struct {
	FacultyID string `json:"f"`
	MajorID string `json:"j"`
	Name string	`json:"n"`
}

func main() {
	psqlInfo := fmt.Sprintf("host=%s port=%d user=%s "+
    "password=%s dbname=%s sslmode=disable",
    host, port, user, password, dbname)
	
		db, err := sql.Open("postgres", psqlInfo)
	if err != nil {
		panic(err)
	}
	defer db.Close()

	file, err := os.Create("./data.txt")
	if err != nil {
		panic(err)
	}

	rows, err := db.Query(`SELECT "facultyId", "majorId", "name" FROM students;`)
	if err != nil {
		log.Println(err)
		panic(err)
	}

	arr := []studentData {}

	for rows.Next() {
		var (
			facultyID sql.NullString
			majorID sql.NullString
			name sql.NullString	
		)
		if err := rows.Scan(&facultyID, &majorID, &name); err!=nil {
			log.Fatal(err)
		}
		var (
			f = ""
			j = ""
			n = ""
		)
		// log.Println(fmt.Sprintf("%s,%s,%s\n",facultyID.String,  majorID.String, name.String))
		if(facultyID.Valid) {
			f = facultyID.String
		}
		if(majorID.Valid) {
			j = majorID.String
		}
		if(name.Valid) {
			n = name.String
		}
		arr = append(arr, studentData {
			FacultyID: f,
			MajorID: j,
			Name: n,
		})
		if err != nil {
			log.Fatal(err)
		}
		// log.Printf("%s, %s\n", nim, nama)
	}
	jsonData,_ := json.Marshal(arr)
	file.WriteString(string(jsonData))
	// file.Sync()
}