// Se importa la librería DataTypes de Sequelize para especificar el tipo de datos de las columnas en el modelo.
// Se exporta una función que recibe como parámetro una instancia de Sequelize. Esta función define el modelo de la tabla "temperament".
// Dentro de la función, se utiliza el método define de la instancia de Sequelize para definir el modelo.
// Se especifica una columna llamada "name" de tipo DataTypes.STRING, y se establece que no puede ser nula
// En la configuración de la tabla se establece que no se quieren timestamps
// Nota: La función no esta creando la tabla en la base de datos, sino definiendo el modelo para ser utilizado en las operaciones de la base de datos.

const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
    // defino el modelo
  sequelize.define('temperament', {
    name: {
        type: DataTypes.STRING,
        allowNull: true,
      },
  },
  {
    timestamps: false
  });
}