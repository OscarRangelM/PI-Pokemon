const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.

/* 
ID. *     x
Nombre. * x
Imagen. * x
Vida. *   x
Ataque. * x
Defensa. *x
Velocidad.x
Altura.   x
Peso.     x
*/

module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Pokemons', {
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false, // cannot be null.
      unique: true, // It has to be unique
    },
    image: {
      type: DataTypes.JSON, 
      allowNull: false,
    },
    hp: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    attack: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    defense: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    speed: {
      type: DataTypes.STRING,
      defaultValue: "N/A",
    },
    height: {
      type: DataTypes.STRING,
      defaultValue: "N/A",
    },
    weight: {
      type: DataTypes.STRING,
      defaultValue: "N/A",
    }
  });
};
