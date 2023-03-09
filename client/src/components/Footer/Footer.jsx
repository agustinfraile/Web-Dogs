import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.png';



import './footer.css';

const Footer = () => {
  return (
    <>
        <div className='footer-container'>
            <div className='footer-container--logo'>
                <Link to='/' className='footer-container_link--logo'>
                    <img src={logo} alt="Logo de web dogs" />
                </Link>
            </div>

            <div className='footer-container--list'>
                <ul>
                    <Link
                        to='/home'
                        className='footer-container--link'
                    >
                        <li>
                            Todas las razas
                        </li>    
                    </Link>
                    <Link
                        to='/create'
                        className='footer-container--link'
                    >
                        <li>
                            Crear perro
                        </li>    
                    </Link>
                    <Link
                        to='/contact'
                        className='footer-container--link'
                    >
                        <li>
                            Contacto
                        </li>    
                    </Link>
                </ul>
            </div>
        </div>
    </>
  )
}

export default Footer