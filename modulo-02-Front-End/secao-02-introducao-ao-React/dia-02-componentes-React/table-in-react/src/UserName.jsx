import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './UserName.css'

class UserName extends Component {
    render() {
        
        // Ao atribuir as props a um componente, o React automaticamente monta um objeto contendo as informações passadas e as disponibiliza para o componente nessa variável chamada props, em algo parecido com isso:

       const name = this.props.name

        return (<span className='nome'> {name} </span>)
    }
}

UserName.propTypes = {
    name: PropTypes.string.isRequired
}

// UserName.defaultProps = {
//     name: 'Stranger'
// }

export default UserName;