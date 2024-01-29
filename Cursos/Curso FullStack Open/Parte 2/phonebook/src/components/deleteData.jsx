
import React from 'react'
import crud from './crud'

const DeletePeople = (props) => {
    const makeDelete = () => {
        crud.deleteData(props.person.id)
        props.setMessage(`${props.person.name} ha sido eliminado correctamente`)
        
        setTimeout(() => {
            props.setMessage(null)
            window.location.reload() //recarga la pagina para que no se pueda acceder al objeto eliminado 
        }, 3000) 
    }

    return <button onClick={makeDelete}>Delete</button> 
}

export default DeletePeople
