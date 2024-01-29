
import React, {useEffect} from 'react'
import crud from './crud'
import DeletePeople from './deleteData'

const SeePeople = (props) => {
    useEffect(() => {
        crud.getData()
        .then(data => props.setPersons(data))
    }
    ,[crud])

    return (
        <div>
            {props.persons.map((person) =>(
                <div key={person.id}>
                    {person.name} : {person.number} 
                    <DeletePeople person={person} setMessage={props.setMessage}/>
                </div>
                )
            )
        }
        </div>
        )
    }

export default SeePeople