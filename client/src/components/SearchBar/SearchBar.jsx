import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { getNameDogs } from '../../redux/actions';

import './SearchBar.css';

const SearchBar = () => {

    const dispatch = useDispatch();
    const [name, setName] = useState('');

    const handleInputChange = (e) => {
        e.preventDefault();
        setName(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(getNameDogs(name));

        setName('');
    }

    return (
        <div className='search-cnt'>
            <form className='form-search-cnt'>
                <input 
                    type="text" 
                    placeholder='Buscar perro...'
                    onChange={e => handleInputChange(e)}
                />
                <button 
                    type='submit'
                    onClick={e => handleSubmit(e)}
                >
                    Buscar
                    {/* <img src={searchLogo} alt="search icon" /> */}
                </button>
            </form>
        </div>
    )
}

export default SearchBar    