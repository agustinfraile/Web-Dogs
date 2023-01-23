import React from 'react';

const CardDetail = ({ id, key, name, image, temperament, weight, height }) => {
  return (
    <div>
        <h1>{name}</h1>
        <img src={image} alt={`Imagen de ${name}`} />
        <h3>{temperament}</h3>
        <h4>{weight}</h4>
        <h4>{height}</h4>
    </div>
  )
}

export default CardDetail