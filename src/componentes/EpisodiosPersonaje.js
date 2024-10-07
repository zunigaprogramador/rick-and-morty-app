import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useState, useEffect } from 'react';

const EpisodiosPersonaje = () => {
  const { id } = useParams();
  const [episodes, setEpisodes] = useState([]);
  const [characterName, setCharacterName] = useState('');
  const [characterImage, setCharacterImage] = useState('');

  useEffect(() => {
    axios.get(`https://rickandmortyapi.com/api/character/${id}`)
      .then(response => {
        const character = response.data;
        setCharacterName(character.name);
        setCharacterImage(character.image);
        const episodesPromises = character.episode.map(url => axios.get(url));
        return Promise.all(episodesPromises);
      })
      .then(responses => {
        const episodesData = responses.map(response => response.data);
        setEpisodes(episodesData);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, [id]);

  return (
    <div>
      <h1 className="text-center mb-4">Episodios del Personaje {characterName}</h1>
      <img src={characterImage} className="rounded mx-auto d-block mb-4" alt={characterName} />
      <div className="list-group">
        {episodes.map(episode => (
          <div key={episode.id} className="list-group-item">
            <h5>{episode.name}</h5>
            <p>Air Date: {episode.air_date}</p>
            <p>Episode: {episode.episode}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EpisodiosPersonaje;
