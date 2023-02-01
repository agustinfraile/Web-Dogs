import React from 'react';

const Filters = ({ temperaments, filterTemperament, filterName, reset, filterByTemperament, orderByAlphabetically }) => {


  return (
    <div>

        <div>
            <select
                onChange={ filterTemperament }
            >
                <option value="tod">Todos los temperamentos</option>
                {
                    temperaments?.map(temp => {
                        return (
                            <option
                                key={temp.id}
                                value={temp.name}
                            >
                                {temp.name}
                            </option>
                        )
                    })
                }
                
            </select>
        </div>


        <div>
            <select
                onChange={ e => filterName(e) }
            >
                <option value="asc">Ordenar de la A-Z</option>
                <option value="des">Ordenar de la Z-A</option>
            </select>
        </div>

        <div>
            <button>Filtrar</button>
            <button onClick={ reset }>Limpiar filtros</button>
        </div>


        <ul>
          <h4>Temperamento:</h4>
          {
            <p>{filterByTemperament}</p>
          }
      </ul>

      <ul>
        <h4>Ordenar por:</h4>
        {
          
            <p>{orderByAlphabetically}</p>
        
        }
      </ul>
    </div>
  );
};

export default Filters;