'use strict';
/*
up, que é a função que indica o que modificar no banco de dados quando executarmos a migration e
down, que funciona como um rollback, ou seja, tudo que for feito na up deve ser desfeito na down.
*/
module.exports = {
  up: (queryInterface, DataTypes) => {
    return queryInterface.createTable('model_names', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
      },
      name: DataTypes.STRING,
      description: DataTypes.STRING,
      created_at: {
        type: DataTypes.DATE,
        allowNull: false
      },
      updated_at: {
        type: DataTypes.DATE,
        allowNull: false
      }
    });
  },

  down: queryInterface => {
    return queryInterface.dropTable('model_names');
  }
};
