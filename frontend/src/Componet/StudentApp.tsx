import {useEffect, useState} from "react";
import {Student} from "../model/Student";
import axios from "axios";
import StudentList from "./StudentList";
import AddStudent from "./AddStudent";
import SearchStudent from "./SearchStudent";

export default function StudentApp() {
    const baseUrl = "/student"

    const [student, setStudent] = useState<Student[]>([])

    const [searchQuery, setSearchQuery] = useState("")

    useEffect(() => {
        getStudentsFromBackend()
    },[])


    function getStudentsFromBackend() {
        axios.get(baseUrl)
            .then(studentListResponse => {
                const newStudentList: Student[] = studentListResponse.data
            })
            .catch(errorResponse => {
                console.log("Alarm!! Etwas ist falsch gelaufen")
            })

    }

    function addStudent(newStudentWithID: Student) {
        axios.post(baseUrl, newStudentWithID)
            .then(newStudentResponse => {
                    console.log(newStudentResponse.data)
                    setStudent(prevState => {
                        return [...prevState, newStudentResponse.data]
                    })

                }
            )
    }
function updateSearchQuery(newSearchQuery:string){
    console.log(newSearchQuery)
    setSearchQuery(newSearchQuery)
}
const filteredStudent = student.filter(students=> students.name
    .toLowerCase()
    .includes((searchQuery.toLowerCase())))


    function deleteStudent(studentToDeleteID : string){
        axios.delete("student/"+studentToDeleteID)
            .then(()=> {
            const updateStudentList = student.filter((student) => student.id !== studentToDeleteID)
                setStudent(updateStudentList)
        })
    }

    return(
        <div>
            <h1>StudentDB</h1>
            <SearchStudent handleSearchQueryChange={updateSearchQuery}/>
            <StudentList studentsToMap = {filteredStudent} deleteStudent={deleteStudent}/>
            <AddStudent handleAddStudent={addStudent}/>
        </div>
    )
}