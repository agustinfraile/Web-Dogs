// Primero, se importan las librerías necesarias: dotenv para acceder a las variables de entorno, Sequelize para conectarse a la base de datos, fs para leer archivos en el sistema de archivos y path para manejar rutas de archivos.
// Luego, se establecen las variables de entorno necesarias para conectarse a la base de datos (DB_USER, DB_PASSWORD, DB_HOST)
// Se crea una nueva instancia de Sequelize con los detalles de la conexión a la base de datos.
// Se leen todos los archivos en la carpeta 'models' y se requieren para ser utilizados como modelos en Sequelize.
// Se establecen las relaciones entre los modelos importados (en este caso, una relación muchos a muchos entre la tabla Dog y Temperament)
// Finalmente, se exportan los modelos importados y la conexión a la base de datos para ser utilizados en otras partes de la aplicación.

require('dotenv').config();
const { Sequelize } = require('sequelize');
const fs = require('fs');
const path = require('path');
const {
  DB_USER, DB_PASSWORD, DB_HOST,
} = process.env;

const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/dogs`, {
  logging: false, // set to console.log to see the raw SQL queries
  native: false, // lets Sequelize know we can use pg-native for ~30% more speed
});
const basename = path.basename(__filename);

const modelDefiners = [];

// Leemos todos los archivos de la carpeta Models, los requerimos y agregamos al arreglo modelDefiners
fs.readdirSync(path.join(__dirname, '/models'))
  .filter((file) => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, '/models', file)));
  });

// Injectamos la conexion (sequelize) a todos los modelos
modelDefiners.forEach(model => model(sequelize));
// Capitalizamos los nombres de los modelos ie: product => Product
let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [entry[0][0].toUpperCase() + entry[0].slice(1), entry[1]]);
sequelize.models = Object.fromEntries(capsEntries);

// En sequelize.models están todos los modelos importados como propiedades
// Para relacionarlos hacemos un destructuring
const { Dog, Temperament } = sequelize.models;

// Aca vendrian las relaciones
// Product.hasMany(Reviews);
Dog.belongsToMany(Temperament, {through: "dogs_temperament"});
Temperament.belongsToMany(Dog, {through: "dogs_temperament"});

module.exports = {
  ...sequelize.models, // para poder importar los modelos así: const { Product, User } = require('./db.js');
  conn: sequelize,     // para importart la conexión { conn } = require('./db.js');
};
