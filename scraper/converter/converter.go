package main

import (
	"io/ioutil"
	"encoding/json"
	"os"
	"fmt"
	"sort"
	"strings"
)

type Student struct {
	Name string `json:"name"`
	MajorID string `json:"jurusan"`
	FacultyID string `json:"tpb"`
}

type byName [][]string

func (a byName) Len() int           { return len(a) }
func (a byName) Swap(i, j int)      { 
	a[i], a[j] = a[j], a[i]
}
func (a byName) Less(i, j int) bool { return a[i][0] < a[j][0] }

func main() {
	file, err := os.Open("../json.json")
	if(err != nil) {
		fmt.Println(err)
	}
	defer file.Close()

	var students []Student

	bytevalue, _ := ioutil.ReadAll(file)
	// fmt.Println(bytevalue)
	json.Unmarshal(bytevalue, &students)

	var result [][]string
	for i:=0; i<len(students); i++ {
		var entry []string
		entry = append(entry, strings.Title(strings.ToLower(students[i].Name)))
		entry = append(entry, students[i].FacultyID)
		if(len(students[i].MajorID) != 0) {
			entry = append(entry, students[i].MajorID)
		}
		// fmt.Println(students[i]);
		result = append(result, entry)
	}


	// jsonResult, _:= os.Open("converted.json")
	// defer jsonResult
	sort.Sort(byName(result))
	byteRep, _ := json.Marshal(result)
	// jsonResult.Write(byteRep)

	_ = ioutil.WriteFile("converted.json", byteRep, 0644)

	
}