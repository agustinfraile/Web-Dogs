// Se importa la librería DataTypes de Sequelize para especificar el tipo de datos de las columnas en el modelo.
// Se exporta una función que recibe como parámetro una instancia de Sequelize. Esta función define el modelo de la tabla "dog".
// Dentro de la función, se utiliza el método define de la instancia de Sequelize para definir el modelo.
// Se especifican varias columnas en el modelo:
// "id" es de tipo DataTypes.UUID, tiene un valor por defecto de DataTypes.UUIDV4, no puede ser nulo y es la clave primaria de la tabla.
// "name" es de tipo DataTypes.STRING y no puede ser nulo.
// "height" es de tipo DataTypes.STRING y no puede ser nulo.
// "weight" es de tipo DataTypes.STRING y no puede ser nulo.
// "life_span" es de tipo DataTypes.STRING y puede ser nulo.
// "createdInDb" es de tipo DataTypes.BOOLEAN, no puede ser nulo y tiene un valor por defecto de "true"
// En la configuración de la tabla se establece que no se quieren timestamps.
// Nota: La función no esta creando la tabla en la base de datos, sino definiendo el modelo para ser utilizado en las operaciones de la base de datos.

const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('dog', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    height: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    weight: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    life_span: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    createdInDb: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true,
    }
  },
  {
    timestamps: false
  });

};
