import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import CardDogs from '../../components/CardDogs/CardDogs'
import { getDogs } from '../../redux/actions';
import playDogs from '../../images/perro-jugando.jpg'
import dogsPic from '../../images/perros-jugando.jpg'


import './Landing.css';

const Landing = () => {
  const dispatch = useDispatch();
  
  const dogs = useSelector((state) => state.dogs);
  // genera un número aleatorio entre 0 y 1 con Math.random(), lo multiplica por la longitud del array de perros (dogs.length) y redondea hacia abajo con Math.floor() para obtener un índice aleatorio dentro del array de perros.
  const randomIndex = Math.floor(Math.random() * dogs.length);  
  // obtener 3 perros a partir de un índice aleatorio
  const firstThreeDogs = dogs.slice(randomIndex, randomIndex + 3); 

  useEffect(() => {
    dispatch( getDogs() );
  }, [dispatch]);
  
  return (
    <>
      <div className='container-landing'>
          <div className='container-landing_title'>
            <h1>
              La web app definitiva para conocer las razas de perros
            </h1>
          </div>

          <div className='container-landing_sub'>
            <h3>
              Explora la diversidad de razas caninas con estos perros destacados
            </h3>
          </div>

          <div>
            {/* CONTENEDOR PARA MOSTRAR 3 DOGS */}
            <div>
              <CardDogs 
                key={dogs.id} 
                currentDogs={ firstThreeDogs } 
              />
            </div>
            <div>
              <Link to='/home'>
                  <button className='button-show'>Mostrar todos</button>
              </Link>
            </div>
          </div>
      </div>

      <div className='container-landing-information'>
        <div className="container-landing_info">

          <div className="container-landing_info--text">
            <h3>
              Los perros son una de las especies más diversas del mundo animal.
              Existen cientos de razas distintas, cada una con sus características físicas y psicológicas únicas. Conocer esta variedad de perros es importante por varias razones.
            </h3>
          </div>
          <div className="container-landing_info--image">
            <img src={playDogs} alt="Perro jugando" />
          </div>
          
        </div>
      </div>

      <div className='container-landing-information'>
        <div className="container-landing_info">

          <div className="container-landing_info--image">
            <img src={dogsPic} alt="Perro jugando" />
          </div>

          <div className="container-landing_info--text">
            <h3>
              Conocer las diferentes razas de perros nos ayuda a encontrar el compañero canino perfecto para nosotros. Cada raza de perro tiene diferentes temperamentos y niveles de actividad, lo que significa que algunas razas son más adecuadas para ciertos estilos de vida y personalidades que otras. Al conocer estas diferencias, podemos elegir la raza de perro que mejor se adapte a nuestras necesidades y preferencias.
            </h3>
          </div>
          
        </div>
      </div>
    </>
  )
}

export default Landing