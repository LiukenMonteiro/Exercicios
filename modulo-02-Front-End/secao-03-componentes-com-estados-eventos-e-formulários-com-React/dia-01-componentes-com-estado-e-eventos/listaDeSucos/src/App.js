import React, { Component } from 'react';
import juices from './data';
import './App.css';
import CardJuice from './components/CardJuice';

// 1. Listar os nomes dos sucos.✅
// 2. Renderizar o copo do suco.✅
// 3. Mudar a cor do copo.✅
// 4. Criar o input de texto ✅
// 5. Armazeenar as informações do input no estado✅
// 6. Filtrar os sucos✅

// Bônus. Remover o case sensitive do filtro
class App extends Component {
  /// FORMA TRADICIONAL
  // constructor() {
  //   super();
  //   this.handleChange = this.handleChange.bind(this)
  //   this.state = {
  //     juiceFilter: '',
  //   }
  // }
  state = {
    juiceFilter: 'afdvavf',
  }

  // handleChange ({ target }) {
  //   const value = target.value;
  //   console.log(this);
  //   // 1 FORMA 
  //   this.setState({
  //     juiceFilter: value,
  //   })
  // }

  handleChange = ({ target }) => {
    const value = target.value;
    console.log(this);
    // 1 FORMA => eventos
    this.setState({
      juiceFilter: value,
    })

    // 2 FORMA => Contador
    // this.setState((prevState) => {
    //   console.log(prevState, 'ESTADO ANTIGO');
    //   return {
    //     juiceFilter: value,
    //   } 
    // })

    // 3 FORMA => assincroscidade
    // this.setState({ 
    //   juiceFilter: value,
    // }, () => {
    //   console.log(this.state.juiceFilter);
    // })
  }

  // handleChange({target: { value }}) {
  //   console.log(value);
  // }

  // handleChange(event) {
  //   console.log(event.target.value);
  // }

  render() {
    const { juiceFilter } = this.state;
    // console.log(juices);
  return (
      <>
        <h1>🍹 Que Suco Foi Esse? 🍹</h1>

        <input 
        className='field-text' 
        type='text' 
        onChange={ this.handleChange } />
        
        <ul>
          {
            juices
            .filter((juice) => juice.suco.includes(juiceFilter))
            .map((juice) => (
              <CardJuice key={juice.hex} juice={juice} />
            ) )
          }
        </ul>
        {/* <CardJuice juice={juices[0]} /> */}
      </>
    );
  }
}

export default App;
