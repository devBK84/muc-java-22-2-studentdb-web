import {Student} from "../model/Student";

type StudentCardProps ={
    studentToDisplay: Student
    deleteStudent(id:string):void
}
export default function StudentCard(props: StudentCardProps){

    function deleteSomeStudent(){
        props.deleteStudent(props.studentToDisplay.id!)
    }
    return(
        <div>
            <p>ID: {props.studentToDisplay.id}</p>
            <p>Name: {props.studentToDisplay.name}</p>
            <button onClick={deleteSomeStudent}>Student delete❎ </button>
        </div>
    )
    }