import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ListaPersonajes from './componentes/ListaPersonajes';
import EpisodiosPersonaje from './componentes/EpisodiosPersonaje';
import OrigenPersonaje from './componentes/OrigenPersonaje';

const App = () => {
  return (
    <div className="container mt-5">
      <Router>
        <Routes>
          <Route path="/" element={<ListaPersonajes />} />
          <Route path="/episodios/:id" element={<EpisodiosPersonaje />} />
          <Route path="/origen/:id" element={<OrigenPersonaje />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;

