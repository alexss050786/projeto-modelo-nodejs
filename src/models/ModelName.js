'use strict';
const { Model, DataTypes } = require('sequelize');

class ModelName extends Model{
  static init(sequelize){
    super.init({
      name: DataTypes.STRING,
      description: DataTypes.STRING,
    }, {
      sequelize
    })
  }

  /*
  //associacoes
  static association(model){

  } */
}

module.exports = ModelName;
