import React from 'react';
import { Link } from 'react-router-dom';

import './footer.css';

const Footer = () => {
  return (
    <>
        <div>
            <ul>
                <Link to='/'>
                    <li>
                        Inicio
                    </li>    
                </Link>
                <Link to='/home'>
                    <li>
                        Perros
                    </li>    
                </Link>
                <Link to='/create'>
                    <li>
                        Crear perro
                    </li>    
                </Link>
                <Link to='/contact'>
                    <li>
                        Contacto
                    </li>    
                </Link>
            </ul>
        </div>

        <div>
            
        </div>
    </>
  )
}

export default Footer