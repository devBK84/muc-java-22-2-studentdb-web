import {ChangeEvent} from "react";

type SearchStudentProps = {
    handleSearchQueryChange(searchQuery:string):void
}

export default function SearchStudent(props: SearchStudentProps){
    function handleSearchQueryChange (event: ChangeEvent<HTMLInputElement>){
        console.log(event)
        props.handleSearchQueryChange(event.target.value)

    }
    return(
        <div>
            <input onChange={handleSearchQueryChange}/>
        </div>
    )
}