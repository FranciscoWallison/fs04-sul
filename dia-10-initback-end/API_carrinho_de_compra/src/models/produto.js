'use strict';
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Produto extends Model {
    static associate(models) {
      // Produto.hasMany(models.Matricula, {
      //   foreignKey: 'aluno_id',
      //   as: 'matriculas'
      // });
    }
  };

  Produto.init({
    nome: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    preco: DataTypes.FLOAT
  }, {
    underscored: true,
    sequelize,
  });
  
  return Produto;
}