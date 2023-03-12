const axios = require('axios');
const { Dog, Temperament } = require('../db');


// funcion para traer todos los perros de la API
const getDogsAPI = async() => {
    const URL = 'https://api.thedogapi.com/v1/breeds';

    let dogs = [];
    let respApi = await axios.get(URL);

    respApi.data.map(dog => {
        dogs.push({
            id: dog.id,
            weight: dog.weight.metric,
            height: dog.height.metric,
            name: dog.name,
            life_span: dog.life_span,
            temperament: [dog.temperament].join().split(',').map(temp => temp.trim()),
            image: dog.image.url
        });
    });

    return dogs;
};

// funcion para traer todos los perros de la base de datos
const getDogsDB = async() => {
    const dogDB = await Dog.findAll ({
        include: {
            model: Temperament,
            attributes: ['name'],
        },
    });

    if(dogDB) {
        return dogDB;
    } else {
        let error = new Error('No se pudo traer los perros de la base de datos');
        throw error;
    };
};


// funcion para buscar y traer todos los perros tanto de la base de datos como los de la API 
const allDogs = async () => {
    let api = await getDogsAPI();
    let DB = await getDogsDB();

    if( api || DB ) {
        const totalDog = DB.concat(api);
        return totalDog;
    } else {
        let error = new Error ('No se pudo traer ningun perros');
        throw error;
    };
};

module.exports = {
    allDogs,
}