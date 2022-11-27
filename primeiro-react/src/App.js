import React, { Component } from 'react';
import Greeting from './Greeting';
// import HelloWorld from './HelloWorld';

// function App() {
//   return(
//     <>
//    < HelloWorld />
//     <br></br>
//     <br></br>
//     {/* <h1>Hello, World</h1>
//     <p>I am writing JSX</p> */}
//     <button>sim</button>
//     <button>não</button>
//     </>
//   )
// }

// export default App;

class App extends Component {
  render() {
    return (
      <main>
        <Greeting name="Liuken" lastName="Monteiro" />
      </main>
    );
  }
}

export default App;