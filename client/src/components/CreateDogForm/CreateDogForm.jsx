import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { getDogs, getTemperaments, postDog } from '../../redux/actions';

import './CreateDogForm.css';

const CreateDogForm = () => {

    const dispatch = useDispatch();
    const history = useHistory();
    const temperaments = useSelector(state => state.temperaments);
    const dogs = useSelector(state => state.dogs);

    
    useEffect(() => {
        dispatch(getDogs())
    }, [dispatch]);
    
    useEffect(() => {
        dispatch(getTemperaments())
    }, [dispatch]);
    
    const [input, setInput] = useState({
        name: '',
        minHeight: '',
        maxHeight: '',
        minWeight: '',
        maxWeight: '',
        height: '',
        weight: '',
        minLife_span: '',
        maxLife_span: '',
        life_span: '',
        temperament: [],
        image: '',
    });

    const [error, setError] = useState("");

    const [errors, setErrors] = useState({
        name: '',
        image: '',
        minHeight: '',
        maxHeight: '',
        minWeight: '',
        maxWeight: '',
    });
    

    const nameRegEx = /^[a-zA-Z ]+$/;
    const urlRegEx = /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/;

    const validateInputs = (input) => {
        let regularExpresion = /^\b[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s0-9-(),.]+$/;

    }

    const handleInputChange = (e) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value,
            height: input.minHeight + ' - ' + input.maxHeight,
            weight: input.minWeight + ' - ' + input.maxWeight,
            life_span: input.minLife_span + ' - ' + input.maxLife_span
        });

        // Validar el nombre de la raza
        if (e.target.name === 'name' && !nameRegEx.test(e.target.value)) {
            setErrors({ ...errors, name: 'El nombre de la raza sólo puede contener letras y espacios' });
        } else if (e.target.name === 'name') {
            setErrors({ ...errors, name: '' });
        }
    }

    const handleSelectChange = (e) => {
        e.preventDefault();
        if(!input.temperament.includes(e.target.value)) {
            setInput({
                ...input,
                temperament: [...input.temperament, e.target.value]
            })
        };
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();

        const dogName = dogs.filter(dog => dog.name === input.name);
        


        let apiNameDogs = dogs?.map(dog => dog.name);


        // Validar que la altura mínima sea menor que la altura máxima
        if (parseInt(input.minHeight) > parseInt(input.maxHeight)) {
            setError("La altura mínima no puede ser mayor que la altura máxima");
            return;
        }

        // Validar que el peso mínimo sea menor que el peso máximo
        if (parseInt(input.minWeight) > parseInt(input.maxWeight)) {
            setError("El peso mínimo no puede ser mayor que el peso máximo");
            return;
        }

        if(input.name.length === 0 || input.weight.length == 0 || input.height.length == 0 || input.life_span === 0) {
            setError("Debe ingresar todos los campos correctamente");
            return;
        }

        if(apiNameDogs.includes(input.name)) {
            setError('Ya existe una raza con ese nombre');
            return;
        } 
        
        dispatch(postDog(input));

        setInput({
            name: '',
            minHeight: '',
            maxHeight: '',
            minWeight: '',
            maxWeight: '',
            height: '',
            weight: '',
            minLife_span: '',
            maxLife_span: '',
            life_span: '',
            temperaments: [],
            image: '',
        });


        alert('Raza creada correctamente');

        history.push('/home');
        

    }

    return (
        <div>
            <div>
                <h2>Agregar una nueva raza</h2>
            </div>

            <form onSubmit={ handleFormSubmit }>
                {error && <p style={{color: "red"}}>{error}</p>}
                <label>Raza:</label>
                <input
                    type="text" 
                    name='name'
                    value={input.name}
                    onChange={ handleInputChange }
                />
                {errors.name && <p style={{color: "red"}}>{errors.name}</p>}

                <label>Altura:</label>
                <span>Entre</span><input
                    type="number" 
                    name='minHeight'
                    value={input.minHeight}
                    onChange={ handleInputChange }
                />
                <span>y</span><input
                    type="number" 
                    name='maxHeight'
                    value={input.maxHeight}
                    onChange={ handleInputChange }
                />


                <label>Peso:</label>
                <span>Entre</span><input
                    type="number" 
                    name='minWeight'
                    value={input.minWeight}
                    onChange={ handleInputChange }
                />
                <span>y</span><input
                    type="number" 
                    name='maxWeight'
                    value={input.maxWeight}
                    onChange={ handleInputChange }
                />

                <label>Expectativa de vida:</label>
                <span>Entre</span><input
                    type="number" 
                    name='minLife_span'
                    value={input.minLife_span}
                    onChange={ handleInputChange }
                />
                <span>y</span><input
                    type="number" 
                    name='maxLife_span'
                    value={input.maxLife_span}
                    onChange={ handleInputChange }
                />

                <label>Temperamentos:</label>
                <select 
                    onChange={ handleSelectChange }
                >

                    {
                        temperaments.map(temp => (
                            <option
                                key={temp.id}
                                value={temp.name}
                            >
                                {temp.name}
                            </option>
                        ))
                    }

                </select>

                <label>Imagen:</label>
                <input
                    type="url" 
                    name='image'
                    value={input.image}
                    onChange={ handleInputChange }
                />
                
                <div>
                    <button type='submit'>Enviar</button>
                    <button>Volver</button>
                </div>
            </form>
        </div>
    );
};

export default CreateDogForm;