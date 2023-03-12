import React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

import './Paginate.css'

const Paginate = ({ dogsPage, dogs, paginate }) => {
  
  const pageNumbers = [];
  
  for(let i = 0; i < Math.ceil(dogs/dogsPage); i++) {
    pageNumbers.push(i+1);
  };

  return (
    <>

      <div className='paginate-container'>
        <Pagination 
          count={pageNumbers.length} 
          variant="outlined" 
          shape="rounded" 
          onChange={(event, value) => paginate(value)} 
        />
      </div>

    </>
  );



}

export default Paginate;