'use strict';

const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.Car, { 
        as: 'Cars'
      })
    }
  }
  User.init({
    name: DataTypes.STRING,
    document: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};