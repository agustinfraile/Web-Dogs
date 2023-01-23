// Importar todos los routers;
const e = require('express');
const { Router } = require('express');
const { allDogs } = require('../controllers');
const { Dog, Temperament } = require('../db');

const router = Router();

// Configurar los routers
router.get('/dogs', async(req, res) => {
    
    const { name } = req.query;
    const dogs = await allDogs();


    try {
        if(name) {
            let dogFiltered = dogs.filter(dog => dog.name.toLowerCase().includes(name.toLowerCase()));
            
            dogFiltered.length 
            ? res.status(200).json(dogFiltered)
            : res.status(404).json('No se encontraron perros con esa raza');
        } else {
            res.status(200).json(dogs);
        }
    } catch (error) {
        res.status(500).send({error: "Datos invalidos"});
    }
});

router.get('/dogs/:id', async(req, res) => {
    const { id } = req.params;
    const dogs = await allDogs();

    try {
        let dogId = dogs.filter(dog => dog.id == id);
        if(dogId.length) {
            return res.status(200).json(dogId);
        } else {
            return res.status(404).json('No hay ningun perro con ese id');
        }
    } catch (error) {
        res.status(500).json({error});
    }

}); 

router.get('/temperaments', async(req, res) => {    
    const dogs = await allDogs();

    try {
        
        let temp = dogs.map(dog => dog.temperament);
        let temperaments = temp.join().split(',').map(temp => temp.trim());

        temperaments.map(temperament => {
            Temperament.findOrCreate({
                where: {
                    name: temperament,
                },
            });
        })

        const allTemperaments = await Temperament.findAll();
        res.status(200).json(allTemperaments); 

    } catch (error) {
        res.status(500).json({error});
    }
});

router.post('/dogs', async(req, res) => {
    const {
        name,
        temperament,
        height,
        weight,
        life_span,
        image
    } = req.body;

    if(
        !name, 
        !temperament,
        !height,
        !weight ){
        return res.status(404).json('Faltan datos para agregar el perro');
    }

    try {
        let newDog = await Dog.create({
            name,
            height,
            weight,
            life_span,
            image
        });

        let temperamentDB = await Temperament.findAll({
            where: {name: temperament},
        });

        newDog.addTemperaments(temperamentDB);

        res.status(200).json(newDog);
    } catch (error) {
        res.status(500).json({error});
    }
});


module.exports = router;
