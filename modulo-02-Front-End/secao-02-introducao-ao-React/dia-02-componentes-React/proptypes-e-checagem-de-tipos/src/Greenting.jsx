import React from 'react';
import PropTypes from 'prop-types';

class Greeting extends React.Component {
  render() {
    const { name, lastName, age } = this.props;
    return (<h1>Hello, {name} {lastName} {age} age.</h1>);
  }
}

Greeting.propTypes = {
  name: PropTypes.string,
  lastName: PropTypes.string,
}.isRequired;

export default Greeting;