import React, { Component } from 'react'
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this)
    this.state = {
      numeroDeCliques: 0
    } 
  }

  handleClick() { // Função 
    this.setState((estadoAnterior, _props) => ({ //setState agenda uma atualizaçãi para o objeto state de um componente, quando o state muda, o coponente responde renderizando novamente.
      numeroDeCliques: estadoAnterior.numeroDeCliques + 1 // Soma o antigo número de cliques ao novo número de cliques.
    }))
  }

  render() {
    const { numeroDeCliques } = this.state;
    console.log(this.state);
    return <button onClick={this.handleClick}>{numeroDeCliques}</button> 
    // Se você quisesse chamar, no elemento, um evento passando um parâmetro, você deveria trocar a sintaxe <button onClick{this.minhaFuncao} ...> por <button onClick={() => this.minhaFuncao('meu parâmetro')}. Basicamente, substitua a função do evento por uma chamada à mesma feita via callback! Experimente!
  }

}

export default App;
