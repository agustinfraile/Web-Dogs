import React from 'react';

const CardDetail = ({ id, name, image, temperament, temperaments, weight, height, createdInDb }) => {
  return (
    <div>
        <h1>{name}</h1>
        <img src={image} alt={`Imagen de ${name}`} style={{width: '30%'}}/>
        <h3>
          {
            createdInDb ?
            temperaments?.map(temp => temp.name).join(' - ')
            : temperament.join(' - ')
          } 
        </h3>
        <h4>{weight}</h4>
        <h4>{height}</h4>
    </div>
  )
}

export default CardDetail;