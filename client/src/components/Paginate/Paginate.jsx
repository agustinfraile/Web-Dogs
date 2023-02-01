import React from 'react';

const Paginate = ({ dogsPage, dogs, paginate }) => {
  
  const pageNumbers = [];
  
  for(let i = 0; i < Math.ceil(dogs/dogsPage); i++) {
    pageNumbers.push(i+1);
  };
  
  return (
    <div>
      <nav>
        <ul>
          {
            pageNumbers &&
            pageNumbers.map( num => {
              return (
                <li 
                  key={num}
                >
                  <button
                    onClick={() => paginate(num)}
                  >
                    {num}
                  </button>
                </li>
              )
            })
          }
        </ul>
      </nav>
    </div>
  );
}

export default Paginate;