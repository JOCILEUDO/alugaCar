'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Car extends Model {
    static associate(models) {
      this.belongsTo(models.User, {
        foreignKey: 'UserId',
        as: 'User'
      })
    }
  }
  Car.init({
    type: DataTypes.STRING,
    color: DataTypes.STRING,
    licensePlate: DataTypes.STRING,
    UserId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Car',
  });
  return Car;
};