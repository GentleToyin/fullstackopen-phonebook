import React, { useState } from 'react'
import Filter from "./components/Filter";
import Form from "./components/form";

const App = () => {
  const [ newSearch, setNewSearch ] = useState('')
  const [ newPersonSearch, setNewPersonSearch ] = useState('')
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas',
      number:'0801111111'
    } 
  ]) 

  const handleSearch = (event)=>{
    setNewSearch(event.target.value);
    if(event.target.value){
      setNewPersonSearch(persons.filter((person)=>person.name.toLowerCase().includes(newSearch))
        );
    } else{
      setNewPersonSearch([])
    }
  }

  const handleNameChange=(event)=>{
    setNewName(event.target.value)
  }
   const handleNumberChange=(event)=>{
    setNewNumber(event.target.value)
  }

  const duplicate = persons.find(obj => obj.name===newName);
 
  const addPerson=(event)=>{
    event.preventDefault()
    if(duplicate){
        console.log(`${newName} is already there`)
      }
    else{
      const newNameObject ={
          name:newName,
          number:newNumber
        }
        setPersons(persons.concat(newNameObject))
        setNewName('')
        setNewNumber('')
    }  
  }

 
  const nameList = persons.map(person=> <ul>{person.name} {person.number}</ul>)

  return (
    <div>
      <h2>Phonebook</h2>
      <Form newName={newName} handleNameChange={handleNameChange} handleNumberChange={handleNumberChange} newNumber={newNumber} addPerson={addPerson} />
      <Filter newSearch={newSearch} handleSearch={handleSearch} newPersonSearch={newPersonSearch} />
      <h2>Numbers</h2>
      ...

        {nameList}
    </div>
  )
}

export default App