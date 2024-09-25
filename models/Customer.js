const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Customer = sequelize.define('Customer', {
  name: { type: DataTypes.STRING, allowNull: false },
  endereco: DataTypes.STRING,
  bairro: DataTypes.STRING,
  cep: DataTypes.STRING,
  cidade: DataTypes.STRING,
  estado: DataTypes.STRING,
}, {
  tableName: 'customers',
});

module.exports = Customer;
