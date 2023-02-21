import React, { Component } from 'react';

// Agora você vai converter a aplicação desenvolvida nos exercícios anteriores para uma que conta o número de cliques dados em cada botão!
// Defina um estado inicial para a contagem de cada botão.

// 👀 De olho na dica: lembre-se que você pode definir três chaves, uma para cada botão!

// Agora, quando um botão for clicado, altere de forma assíncrona o estado deste botão de zero para um.

// Por fim, incremente a contagem de um botão sempre que ele for clicado.
class Botoes extends Component {

  constructor () {
    super();
    this.clickedButtonOne = this.clickedButtonOne.bind(this); // capturo o estado inicial
    this.clickedButtonTwo = this.clickedButtonTwo.bind(this);
    this.clickedButtonThree = this.clickedButtonThree.bind(this);
    this.state = {
      numberOfClickOne: 0, // Dou um valor ao estado inicial
      numberOfClickTwo: 0,
      numberOfClickThree: 0,
    }
  }

  clickedButtonOne() {
    this.setState((previousStateOne, _props) => ({ // mudo e incremento o estado inicial
      numberOfClickOne: previousStateOne.numberOfClickOne + 1
    }))
    // console.log('clicked button one!', this);
}
  clickedButtonTwo() {
    this.setState((previousStateTwo, _props) => ({
      numberOfClickTwo: previousStateTwo.numberOfClickTwo + 1
    }))
  // console.log('clicked button two!', this);
}
  clickedButtonThree() {
    this.setState((previousStateThree, _props) => ({
      numberOfClickThree: previousStateThree.numberOfClickThree + 1
    }))
  // console.log('clicked button three!', this);
}
  render() {
    const { numberOfClickOne, numberOfClickTwo, numberOfClickThree } = this.state; // salvo o estado dentro de uma constante dentro do metodo render
    // console.log(this.state);
    return (
      <main>
      <button type="button" onClick={this.clickedButtonOne}>{`Cliques no botão 1: ${numberOfClickOne}`}</button>
      <button type="button" onClick={this.clickedButtonTwo}>{`Cliques no botão 2: ${numberOfClickTwo}`}</button>
      <button type="button" onClick={this.clickedButtonThree}>{`Cliques no botão 3: ${numberOfClickThree}`}</button>
      </main>
    );
  }
}

export default Botoes;
