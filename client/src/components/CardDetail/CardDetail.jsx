import React from 'react';

import './CardDetail.css';

const CardDetail = ({ id, name, image, temperament, temperaments, weight, height, createdInDb }) => {
  return (
    <div className='card-container'>
        <div className='card-container_img'>
          <img src={image} alt={`Imagen de ${name}`} />
        </div>
        
        <div className='card-container_name'>
          <h1>{name}</h1>
        </div>
        
        <div className='card-container_info'>
          <h3>
            {
              createdInDb ?
              temperaments?.map(temp => temp.name).join(' - ')
              : temperament.join(' - ')
            } 
          </h3>
          <h4>Altura (cm): {weight}</h4>
          <h5>Peso (kg): {height}</h5>
        </div>
    </div>
  )
}

export default CardDetail;