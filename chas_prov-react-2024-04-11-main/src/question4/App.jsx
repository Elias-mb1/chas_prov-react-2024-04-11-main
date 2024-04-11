// 3. Uppdatera ett namn med callback 3p
// En namn ska visas på sidan och namnet ska vara kopplat till useState i App-komponenten.
// Skapa en komponent: ChangeName som har ett inputfält som ska användas för att ändra
// namnet i App-komponenten via en callback-funktion.

import React, { useState, useCallback } from "react";

const ChangeName = ({ onChangeName }) => {
  const [newName, setNewName] = useState("");

  const handleInputChange = (e) => {
    setNewName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onChangeName(newName);
    setNewName(""); 
  };

  const memoizedOnChangeName = useCallback(onChangeName, []);

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter new name"
        value={newName}
        onChange={handleInputChange}
      />
      <button type="submit">Change Name</button>
    </form>
  );
};

const App = () => {
  const [name, setName] = useState("John");

  const handleNameChange = useCallback((newName) => {
    setName(newName);
  }, []);

  return (
    <div>
      <h2>Name: {name}</h2>
      <ChangeName onChangeName={handleNameChange} />
    </div>
  );
};

export default App;
