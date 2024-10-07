import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const OrigenPersonaje = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState(null);

  useEffect(() => {
    axios.get(`https://rickandmortyapi.com/api/character/${id}`)
      .then(response => {
        setCharacter(response.data);
      })
      .catch(error => {
        console.error('Error fetching character:', error);
      });
  }, [id]);

  if (!character) return <div>Loading...</div>;

  return (
    <div>
      <h2 className="text-center mb-4">{character.name} - Origen</h2>
      <img src={character.image} className="rounded mx-auto d-block mb-4" alt={character.name} />
      <p className="text-center">Origen: <a href={character.origin.url}>{character.origin.name}</a></p>
    </div>
  );
};

export default OrigenPersonaje;




