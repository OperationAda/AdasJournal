const {Sequelize, sequelize} = require('./db');

const A_journal = sequelize.define('a_journal', {
  title: Sequelize.STRING,
  notes: Sequelize.STRING,
  pages: Sequelize.INTEGER
});

module.exports = { A_journal };