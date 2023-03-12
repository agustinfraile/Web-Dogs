import React from 'react';
import './IconCircle.css';

const IconCircle = ({ image, link, name }) => {

  const isEmail = link.includes("@");

  return (
    <div 
      className='icons_cnt-icon'
      onClick={() => isEmail ? window.open(`mailto:${link}`) : window.open(link)}
    >
      <img 
        src={image} 
        alt={`Imagen de ${image}`} 
        title={ isEmail ? `Mandar un correo` : `Ir a ${name}`}
      />
    </div>
  )
}

export default IconCircle