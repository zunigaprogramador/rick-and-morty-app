import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const ListaPersonajes = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    axios.get('https://rickandmortyapi.com/api/character')
      .then((response) => {
        setCharacters(response.data.results);
      })
      .catch(error => {
        console.error('Error fetching data', error);
      });
  }, []);

  return (
    <div>
      <h1 className="text-center mb-4">Lista de Personajes</h1>
      <div className="row">
        {characters.map(character => (
          <div key={character.id} className="col-md-4 mb-4">
            <div className="card">
              <img src={character.image} className="card-img-top" alt={character.name} />
              <div className="card-body">
                <h5 className="card-title">{character.name}</h5>
                <p className="card-text">Status: {character.status}</p>
                <p className="card-text">Species: {character.species}</p>
                <Link to={`/episodios/${character.id}`} className="btn btn-primary">Ver Episodio</Link>
                <Link to={`/origen/${character.id}`} className="btn btn-secondary ml-2">Ver Origen</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListaPersonajes;


