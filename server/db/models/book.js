'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Book extends Model {

    static associate(models) {
      this.belongsTo(models.Library, {
        foreignKey: "library_id",
      });      this.belongsTo(models.User, {
        foreignKey: "user_id",
      });
    }
  }
  Book.init({
    title: DataTypes.TEXT,
    author: DataTypes.TEXT,
    year: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER,
    library_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Book',
  });
  return Book;
};