
import React, { useState, useEffect } from 'react'
import './styles.css' 

import crud from './components/crud'
import SeePeople from './components/seePeople'
import FormAdd from './components/formAdd'
import FormSearch from './components/formSearch'
import Notification from './components/message'

const App = () => {
  const [ persons, setPersons ] = useState([]) 

  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ search, setSearch ] = useState('')
  const [ message, setMessage] = useState('')


  const inputName = (event) => {setNewName(event.target.value)}
  const inputPhone = (event) => {setNewNumber(event.target.value)}
  const inputSearch = (event) => {setSearch(event.target.value)}


  const addPeople = (event) => {
    event.preventDefault();
    const divAlert = document.getElementsByClassName('Alert')
  
    const newPerson = { id: `${persons.length + 1}`, name: newName, number: newNumber };
  
    const isInPhonebook = persons.find((person) => person.name.toLowerCase() === newPerson.name.toLowerCase() );
  
    if (isInPhonebook) {
      if (window.confirm(`${newPerson.name} ya está en el directorio. ¿Quiere reemplazar su número por uno nuevo?`)) {
        crud.putData(isInPhonebook.id, newPerson)
          .then(updatedPerson => {
            setPersons(persons.map(person =>
              person.id === updatedPerson.id ? { ...person, number: updatedPerson.number } : person)
            );
          }
        )
        setMessage(`${newPerson.name} ha modificado su numero correctamente`)
        setTimeout(() => {
          setMessage(null)
        }, 5000)
      }

    } else {
      crud.postData(newPerson)
        .then(newP => {
          setPersons(persons => [...persons, newP]);
        }
      )
      setMessage(`${newPerson.name} ha sido añadido correctamente`)
        setTimeout(() => {
          setMessage(null)
        }, 5000)
    }

    setNewName('');
    setNewNumber('');
  };
  

  const searchPeople = (event) => {
    event.preventDefault();
    
    const divSearch = document.getElementById('searchs')
    const personSearch = persons.find(person => person.name.toLowerCase() === search.toLowerCase());

    personSearch ? 
    crud.getPerson(personSearch.id)
      .then(person => {
        divSearch.innerHTML = `${person.name} : ${person.number}`
      })
    
      : divSearch.innerHTML = 'No se encontró'

    setSearch('')
  }


  return (
    <div>
      <h1>Phonebook</h1>

      <Notification message={message}/>
    
      <FormSearch searchPeople={searchPeople} inputSearch={inputSearch} search={search}/>
      <br /> <div id='searchs'></div>
      
      <FormAdd addPeople={addPeople} newName={newName} inputName={inputName} newPhone={newNumber} inputPhone={inputPhone}/> 

      <br /><h2>People on this phonebook</h2>
      
      <SeePeople persons={persons} setPersons={setPersons} setMessage={setMessage}/>
    </div>
  )
}

export default App