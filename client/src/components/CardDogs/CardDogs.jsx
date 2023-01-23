import React from 'react'
import { Link } from 'react-router-dom';
import CardDetail from '../CardDetail/CardDetail';

const CardDogs = ({ dogs }) => {
  return (
    <div>
        {
            dogs && dogs.map(dog => {
                return (
                    <Link 
                        to='/'
                        key={dog.id}
                    >
                        <CardDetail 
                            id={dog.id}
                            key={dog.id}
                            name={dog.name}
                            image={dog.image}
                            temperament={dog.temperament}
                            weight={dog.weight}
                            height={dog.height}
                        />
                    </Link>
                )
            })
        }        
    </div>
  )
}

export default CardDogs;