import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CardDogs from '../../components/CardDogs/CardDogs';
import { getDogs } from '../../redux/actions';


const Home = () => {

  const dispatch = useDispatch();

  const dogs = useSelector((state) => state.allDogs);

  useEffect(() => {
    dispatch( getDogs() );

  }, [dispatch])
  

  return (
    <div>
      <CardDogs dogs={dogs} />
    </div>
  )
}

export default Home;