import React, { Component } from 'react'
import drink from '../assets/copo.png'

class CardJuice extends Component {
  render() {
    const { juice } = this.props
    const { suco, hex } = juice;
    return (
      <li className='card-container'>
        <img 
        style={ { backgroundColor: hex } } 
        className='card-img-juice' 
        src={drink} alt={`O nome do suco é ${suco}`} />
        <h2>
            {`O nome do suco é ${suco}`}
        </h2>
      </li>
    )
  }
}

export default CardJuice;