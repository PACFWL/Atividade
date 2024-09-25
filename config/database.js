const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('teste', 'root', 'Senha000', {
  host: 'localhost',
  dialect: 'mysql'
});

module.exports = sequelize;
