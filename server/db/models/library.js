'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Library extends Model {

    static associate(models) {

      
      this.hasMany(models.Library, {
        foreignKey: "library_id",
      });
    }
  }
  Library.init({
    address: DataTypes.TEXT,
    name: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Library',
  });
  return Library;
};