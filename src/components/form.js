
const Form = ({ newName, handleNameChange, newNumber, handleNumberChange, addPerson }) => {
    return (
      <>
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
          <button onClick= {addPerson} type="submit">add</button>
        </div>
      </form>
      </>
    );
  };

export default Form