import React from 'react';

const full = {
    name:'Maycon',  
    nametwo:'Liuken',
    age:'18',
    agetwo:'23'}

class Greeting extends React.Component {
  render() {
    return (
      <main>
        <h1>Hello, {full.name} you are {full.age}?</h1>
        <h1>Hello, {full.nametwo}, i am {full.agetwo}.</h1>
      </main>
    );
  }
}

export default Greeting;