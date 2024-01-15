
import React from 'react'

const Course = (props) => {
    return props.courses.map((course) => {
        return (
            <div key={course.id}>
                <h2> {course.name} </h2>
                {course.parts.map((part) => (<p key={part.id}> {part.name} : {part.exercises} </p>))}
                <p><strong> Total de ejercicios:{course.parts.reduce((sum, part) => sum + part.exercises ,0)} </strong></p>
                <br />
            </div>
        )})
}

export default Course