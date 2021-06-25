
const Filter = ({ newSearch, handleSearch, newPersonSearch }) => {
    return (
      <>
        Filter  <input value={newSearch} onChange={handleSearch} />
      </>
    );
  };

export default Filter