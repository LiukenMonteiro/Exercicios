import React, { Component } from 'react';
import './App.css';

function handleclick() {
  console.log('clicou!');
}
class App extends Component {
  render() {
    return (
    <button onClick={handleclick}>Meu botão</button>
  );
}
}

export default App;
