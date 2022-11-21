import {Student} from "../model/Student";
import {ChangeEvent, useState} from "react";

type AddStudentProps = {
    handleAddStudent(newStudent: Student): void
}

export default function AddStudent(props: AddStudentProps){
    const [studentName, setStudentName]= useState("")

    function handleStudentNameChange (event: ChangeEvent<HTMLInputElement>){
        const newName = event.target.value
        setStudentName((newName))
    }

    function handleAddStudent(){
        const newStudent: Student ={
            name: studentName
        }
        props.handleAddStudent(newStudent)
    }

    return(
        <div>
            New Student: <input value={studentName} onChange={handleStudentNameChange}/>
            <button onClick={handleAddStudent}>Add</button>
        </div>
    )
}