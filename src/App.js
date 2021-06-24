import React, { useState } from 'react'

const App = () => {
 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas',
      number:'0801111111'
    } 

  ]) 

  const handleNameChange=(event)=>{
    setNewName(event.target.value)
  }
   const handleNumberChange=(event)=>{
    setNewNumber(event.target.value)
  }
 
  const addName=(event)=>{
    event.preventDefault()
    if(filter){
        console.log(`${newName} is already there`)
      }
    else{
      const newNameObject ={
          name:newName,
          number:newNumber
        }
        setPersons(persons.concat(newNameObject))
        setNewName('')
    }  
  }

 
  const nameList = persons.map(person=> <ul>{person.name} {person.number}</ul>)
  const filter = persons.find(obj => obj.name===newName);

  return (
    <div>
      <h2>Phonebook</h2>
      <form>
        <div>
          name: <input
          value = {newName}
          onChange={handleNameChange} />
        </div>
         <div>
          number: <input
          value = {newNumber}
          onChange={handleNumberChange} />
        </div>
        <div>
          <button onClick= {addName} type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      ...

        {nameList}
    </div>
  )
}

export default App