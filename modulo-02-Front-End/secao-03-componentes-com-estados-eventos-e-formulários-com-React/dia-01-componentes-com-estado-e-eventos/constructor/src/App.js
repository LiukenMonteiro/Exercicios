import React, { Component } from 'react';
import './App.css';

// this(bind) = é uma forma da gente garantir que as funções que a gente cria tenha acesso ao this, para poder usa-lo para acessar props, estado ou o que for
class App extends Component {
  constructor() { // função constructor, o react tem sua função constructor interna e eu posso redeclarar ela e adicionar algum comportamento que eu queira
    super() // faz a ligação da função constructor do react com a minha função constructor
    this.handleclick = this.handleclick.bind(this) // para que nossa função possa enxergar o "this"

    console.log('Componente sendo construído'); // Printa componente sendo construído na tela
  }

  handleclick() { // função 
    console.log(this);
    console.log('Clicou!'); // Printa clique na tela
  }

  render() { // O qque será renderizado na tela
    console.log(this); // printando objeto "this" no console.
    return <button type="button" onClick={this.handleclick}>Meu Botão</button> 
    //retornando botão com evento de click que chama a function handleclick de dentro do Component
  }
}

export default App;

// Ao definir uma função da classe com uma arrow function, com a sintaxe minhaFuncao = () => {...}, você não precisará fazer o bind. Então não precisaremos do construtor nesse caso. Veja como o exemplo acima seria feito com arrow function:

// import React from 'react';
// import './App.css';

// class App extends React.Component {
//   handleClick = () => {
//     console.log('Clicou!')
//   }

//   render() {
//     return <button onClick={this.handleClick}>Meu botão</button>
//   }
// }

// export default App;
