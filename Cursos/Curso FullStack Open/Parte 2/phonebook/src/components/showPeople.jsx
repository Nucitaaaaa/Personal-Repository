
import React from 'react'

const ShowPeople = (props) => {
    return props.persons.map((person) => (<p key={person.name}>{person.name} {person.phone}</p>))
}

export default ShowPeople