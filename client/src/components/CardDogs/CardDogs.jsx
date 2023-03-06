import React from 'react'
import { Link } from 'react-router-dom';
import CardDetail from '../CardDetail/CardDetail';

const CardDogs = ({ currentDogs }) => {
  return (
    <div>
        {
            currentDogs && currentDogs.map(dog => {
                return (
                    <Link 
                        to={`/dogs/${dog.id}`}
                        key={dog.id}
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
  );
};

export default CardDogs;