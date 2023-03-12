import React from 'react'
import { Link } from 'react-router-dom';
import CardDetail from '../CardDetail/CardDetail';

import './CardDogs.css';

const CardDogs = ({ currentDogs }) => {
  return (
    <div className='allCardsContainer'>
       <div className='allCards'>
        {
            currentDogs && currentDogs.map(dog => {
                return (
                    <Link 
                        to={`/dogs/${dog.id}`}
                        key={dog.id}
                        style={{textDecoration: 'none', color: '#010101'}}
                    >
                        <CardDetail 
                            id={dog.id}
                            key={dog.id}
                            name={dog.name}
                            image={dog.image}
                            temperament={dog.temperament}
                            temperaments={dog.temperaments}
                            weight={dog.weight}
                            height={dog.height}
                            createdInDb = {dog.createdInDb}
                        />
                    </Link>
                )
            })
        }
       </div>
    </div>
  );
};

export default CardDogs;