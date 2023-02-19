import React, { Component } from 'react';


class Botoes extends Component {

  constructor () {
    super();
    this.clickedButtonOne = this.clickedButtonOne.bind(this);
    this.clickedButtonTwo = this.clickedButtonTwo.bind(this);
    this.clickedButtonThree = this.clickedButtonThree.bind(this);
  }

  clickedButtonOne() {
    console.log('clicked button one!', this);
}
  clickedButtonTwo() {
  console.log('clicked button two!', this);
}
  clickedButtonThree() {
  console.log('clicked button three!', this);
}
  render() {
    return (
      <main>
      <button type="button" onClick={this.clickedButtonOne}>Button One</button>
      <button type="button" onClick={this.clickedButtonTwo}>Button Two</button>
      <button type="button" onClick={this.clickedButtonThree}>Button Three</button>
      </main>
    );
  }
}

export default Botoes;
