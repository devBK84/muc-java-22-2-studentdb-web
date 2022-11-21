import React from "react";
import {Student} from "../model/Student";
import StudentCard from "./StudentCard";

type StudentListProps = {
    studentsToMap: Student []
    deleteStudent(id:string):void
}
    export default function StudentList(props: StudentListProps){

    const studentComponents = props.studentsToMap.map(studentData =>{
        return <StudentCard studentToDisplay={studentData} key={studentData.id} deleteStudent={props.deleteStudent}/>
    })

    return(
        <div>
            {studentComponents}
        </div>
    )
}

