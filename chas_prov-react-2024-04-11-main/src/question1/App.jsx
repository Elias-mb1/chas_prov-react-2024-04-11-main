// 1. En lista med filmer (3p)
// Sidan ska visa en lista med filmer
// Användaren ska kunna lägga till nya filmer i listan genom att skriva in filmens namn
// i ett inputfält och sedan klicka på en "Lägg till"-knapp.
// Varje film i listan ska ha en ta bort knapp som tar bort den filmen ur listan

import React, { useState } from "react";

const FilmsList = () => {
  const [films, setFilms] = useState([]);
  const [newFilm, setNewFilm] = useState("");

  const addFilm = () => {
    if (newFilm.trim() !== "") {
      setFilms([...films, newFilm]);
      setNewFilm("");
    }
  };

  const removeFilm = (index) => {
    const updatedFilms = [...films];
    updatedFilms.splice(index, 1);
    setFilms(updatedFilms);
  };

  return (
    <div>
      <h2>Films List</h2>
      <ul>
        {films.map((film, index) => (
          <li key={index}>
            {film}
            <button onClick={() => removeFilm(index)}>Remove</button>
          </li>
        ))}
      </ul>
      <div>
        <input
          type="text"
          placeholder="New Film"
          value={newFilm}
          onChange={(e) => setNewFilm(e.target.value)}
        />
        <button onClick={addFilm}>Add Film</button>
      </div>
    </div>
  );
};

export default FilmsList;