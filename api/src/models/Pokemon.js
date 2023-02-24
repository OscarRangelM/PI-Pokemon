const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.

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
      type: DataTypes.STRING,
      allowNull: false,
    },
    hp: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    attack: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    defense: {
      type: DataTypes.STRING,
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
  },{
    /* Telling Sequelize not to add the timestamp columns (updatedAt, createdAt). */
    timestamps: false, 
  });
};
