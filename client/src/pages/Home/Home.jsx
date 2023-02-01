import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CardDogs from '../../components/CardDogs/CardDogs';
import Filters from '../../components/Filters/Filters';
import Paginate from '../../components/Paginate/Paginate';
import SearchBar from '../../components/SearchBar/SearchBar';
import { filterDogsByName, filterDogsByTemperament, getDogs, getTemperaments } from '../../redux/actions';


const Home = () => {

  const dispatch = useDispatch();
  
  const dogs = useSelector((state) => state.dogs);  
  const temperaments = useSelector((state) => state.temperaments);  
  
  const [currentPage, setCurrentPage] = useState(1);
  const [dogsPage, setDogsPage] = useState(8);

  const indexOfLastDog = currentPage * dogsPage; 
  const indexOfFirstDog = indexOfLastDog - dogsPage; 
  const currentDogs = dogs.slice(indexOfFirstDog, indexOfLastDog);

  const [currentFilter, setCurrentFilter] = useState("");
  const [appliedTemperamentFilters, setAppliedTemperamentFilters] = useState('');
  const [appliedNameFilters, setAppliedNameFilters] = useState('');


  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  }


  useEffect(() => {
    dispatch( getDogs() );
  }, [dispatch]);

  useEffect(() => {
    dispatch( getTemperaments() );
  }, [dispatch]);

  const handleFilteredTemperaments = (e) => {
    const newFilter = e.target.value;
    dispatch(filterDogsByTemperament(newFilter));
    setCurrentFilter(newFilter);
    setAppliedTemperamentFilters(newFilter);
    setCurrentPage(1);
  };

  const handleFilteredName = (e) => {
    const newFilter = e.target.value;
    setCurrentFilter(newFilter);
    setAppliedNameFilters(newFilter);
    dispatch(filterDogsByName(newFilter));
    setCurrentPage(1);
  }
  
  
  const resetFilter = (e) => {
    e.preventDefault();
    dispatch(getDogs());

    setCurrentPage(1);
  }



  

  return (
    <div>

      <SearchBar />

      <Filters 
        temperaments = { temperaments }
        filterTemperament = { handleFilteredTemperaments }
        filterName = { handleFilteredName }
        reset = { resetFilter }
        filterByTemperament = { appliedTemperamentFilters }
        orderByAlphabetically = { appliedNameFilters }
      />
      
      <CardDogs 
        currentDogs = { currentDogs }  
      />
      
      <Paginate
        dogsPage = { dogsPage }
        dogs = { dogs.length }
        paginate = { paginate }
      />
    </div>
  );
};

export default Home;