import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import CardDogs from '../../components/CardDogs/CardDogs'
import { getDogs } from '../../redux/actions';

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
        <div>
          <h1>
            La web app definitiva para conocer las razas de perros
          </h1>
        </div>

        <div>
          <h3>
            Explora la diversidad de razas caninas con estos perros destacados
          </h3>

          {/* CONTENEDOR PARA MOSTRAR 3 DOGS */}
          <div>
            <CardDogs 
              key={dogs.id} 
              currentDogs={ firstThreeDogs } 
            />
          </div>
          <div>
            <Link to='/home'>
                <button>Mostrar todos</button>
            </Link>
          </div>
        </div>
    </>
  )
}

export default Landing