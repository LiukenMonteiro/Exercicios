import React from 'react';
import Pokedex from './components/Pokedex';
import pokemonList from './data';
import './App.css';

function App() {
  return (
    <div>
      <h1>Exercise - Pokedex</h1>
      <Pokedex pokemonList={ pokemonList } />
    </div>
  );
}

export default App;
