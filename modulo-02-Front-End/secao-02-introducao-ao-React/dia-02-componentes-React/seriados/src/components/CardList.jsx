import React, { Component } from 'react';
import Card from './Card';
import data  from '../data';

class CardList extends Component {
    render (){

        return (
            <div className='Series_container'>
                {data.map((serie) => (
                     <Card 
                        key={serie.id}
                        // name={serie.name}
                        // release={serie.release}
                        // image={serie.image}
                        // characters={serie.characters}
                        // genre={serie.genre}
                        // rate={serie.rate}
                        serie={serie}
                     />
                ) )}
            </div>
        )
    }
}

export default CardList;