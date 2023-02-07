import React from 'react'
import { Link } from 'react-router-dom'

const Landing = () => {
  return (
    <div>
        Buenas!
        <Link to='/home'>
            <button>Ingresar</button>
        </Link>
    </div>
  )
}

export default Landing