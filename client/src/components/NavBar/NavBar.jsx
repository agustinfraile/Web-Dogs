import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
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
  )
}

export default NavBar;