 const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('country', {
    area: {
      type: DataTypes.INTEGER,
    },
    code: {
      type: DataTypes.STRING(3),
      allowNull: false,
      primaryKey: true,
    },
    capital: {
      type: DataTypes.STRING,
      /* allowNull: false, */
    },
    flag: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    population: {
      type: DataTypes.INTEGER,
    },
    region: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    subregion: {
      type: DataTypes.STRING,
    },
  }, {
    timestamps: false
  });
};