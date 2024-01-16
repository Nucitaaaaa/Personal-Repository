
import React from 'react'

const FormSearch = (props) => (
    <div>
        <h2>Search people</h2>
        <form onSubmit={props.searchPeople}>
            <input value={props.search} onChange={props.inputSearch} />
            <button type="submit">Search</button>
        </form>
    </div>
)

export default FormSearch