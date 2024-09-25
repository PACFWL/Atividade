const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('teste', 'root', 'PabloWhoLock00', {
  host: 'localhost',
  dialect: 'mysql'
});

module.exports = sequelize;
