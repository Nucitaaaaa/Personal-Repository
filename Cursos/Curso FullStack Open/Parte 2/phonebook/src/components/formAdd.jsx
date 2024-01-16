
import React from 'react'

const FormAdd = (props) => (
    <div>
        <h2>Add people</h2>
        <form onSubmit={props.addPeople}>
            <div>
            Name: <input value={props.newName} onChange={props.inputName}/>
            <br />
            Phone: <input value={props.newPhone} onChange={props.inputPhone}/>
            </div>
            <div>
            <button type="submit">Add</button>
            </div>
        </form>
    </div>
)

export default FormAdd