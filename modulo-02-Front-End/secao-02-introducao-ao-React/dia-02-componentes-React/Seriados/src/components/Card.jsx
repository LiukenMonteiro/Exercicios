import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Card.css'

class Card extends Component {
    render (){
        const { name, release, image, characters, genre, rate } = this.props.serie;
        // console.log(name);
        // console.log(characters);

        return (
            <div className='Card'>
                <div className='Card__thumbnail'>
                    <img src={image} alt='teste'/>
                </div>
            <div className='Card__body'>
                <h1>{name}</h1>
                <p>
                    <span>{release}</span>
                    <span>{genre}</span>
                </p>
                <p className='stars'>{'⭐ '.repeat(rate)}</p>
                <h2>Personagens</h2>
                <ul>
                    {characters.map((person, index) => <li key={index}>{person}</li>)}
                </ul>   
            </div>
            </div>
        )
    }
}

Card.propTypes = {
    name: PropTypes.string.isRequired,
    release: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    characters: PropTypes.arrayOf(PropTypes.string).isRequired,
    genre: PropTypes.string.isRequired,
    rate: PropTypes.number.isRequired,
}

export default Card;