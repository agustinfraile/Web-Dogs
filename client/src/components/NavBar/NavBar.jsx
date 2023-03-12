import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.png';


import './NavBar.css';

const NavBar = () => {
  return (
    <div className='navbar-container'>
        <ul>
            <div className='footer-container--logo'>
                <Link to='/' className='footer-container_link--logo'>
                    <img src={logo} alt="Logo de web dogs" />
                </Link>
            </div>

            <div className='navbar-container_list'>
                <Link 
                    to='/home'
                    className='navbar-container_list--link'
                >
                    <li>
                        Perros
                    </li>    
                </Link>
                <Link 
                    to='/create'
                    className='navbar-container_list--link'
                >
                    <li>
                        Crear perro
                    </li>    
                </Link>
                <Link 
                    to='/contact'
                    className='navbar-container_list--link'
                >
                    <li>
                        Contacto
                    </li>    
                </Link>
            </div>
        </ul>
    </div>
  )
}

export default NavBar;