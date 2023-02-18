import React, { Component } from 'react';

function clickedButtonOne() {
    console.log('clicked button one!');
}
function clickedButtonTwo() {
  console.log('clicked button two!');
}
function clickedButtonThree() {
  console.log('clicked button three!');
}
class Botoes extends Component {
  render() {
    return (
      <main>
      <button onClick={clickedButtonOne}>Button One</button>
      <button onClick={clickedButtonTwo}>Button Two</button>
      <button onClick={clickedButtonThree}>Button Three</button>
      </main>
    );
  }
}

export default Botoes;
