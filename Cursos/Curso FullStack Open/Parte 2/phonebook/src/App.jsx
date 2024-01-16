
import React, { useState } from 'react'
import ShowPeople from './components/showPeople'
import FormAdd from './components/formAdd'
import FormSearch from './components/formSearch'

const App = () => {
  const [ persons, setPersons ] = useState([{ name: 'Arto Hellas', phone: '040-1234567' }]) 

  const [ newName, setNewName ] = useState('')
  const [ newPhone, setNewPhone ] = useState('')
  const [ search, setSearch ] = useState('')

  const inputName = (event) => {setNewName(event.target.value)}
  const inputPhone = (event) => {setNewPhone(event.target.value)}
  const inputSearch = (event) => {setSearch(event.target.value)}


  const addPeople = (event) => {
    event.preventDefault() //se previene que se recargue la pagina

    const newPerson = {name: newName, phone: newPhone} //se crea una const para guardar el nuevo nombre

    persons.find((person) => person.name.toLowerCase() === newPerson.name.toLowerCase()) ? 
    alert(`${newPerson.name} ya se encuentra en el directorio`) : setPersons(persons.concat(newPerson))  //se asigna lo que este escrito en el input como nuevo valor de newName
    
    setNewName('')
    setNewPhone('') //se limpia el input para poder seguir escribiendo 
  } 

  const searchPeople = (event) => {
    event.preventDefault()
    
    const divSearch = document.getElementById('searchs')
    const searchResult = persons.filter((person) => person.name.toLowerCase() === search.toLowerCase())  
  
    searchResult.length > 0 ? 
    divSearch.innerHTML = `${searchResult.map((person) => (`${person.name} ${person.phone}`))}` : divSearch.innerHTML = `No se ha encontrado`

    setSearch('')
  }

  return (
    <div>
      <h1>Phonebook</h1>
    
      <FormSearch searchPeople={searchPeople} inputSearch={inputSearch} search={search}/>
      <br /> <div id='searchs'></div>
      
      <FormAdd addPeople={addPeople} newName={newName} inputName={inputName} newPhone={newPhone} inputPhone={inputPhone}/>

      <br /><h2>People on this phonebook</h2>
      <ShowPeople persons={persons}/>
    </div>
  )
}

export default App