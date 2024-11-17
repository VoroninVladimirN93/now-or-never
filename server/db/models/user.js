'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {

    static associate(models) {

      this.hasMany(models.Book, {
        foreignKey: "book_id",
      });

    }
  }
  User.init({
    name: DataTypes.TEXT,
    password: DataTypes.TEXT,
    email: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};