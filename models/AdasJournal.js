const Sequelize = require("sequelize");

const { sequelize} = require('./db');

const AdasJournal = sequelize.define('a_journal', {
  
    title: Sequelize.STRING,
  notes: Sequelize.STRING,
  pages: Sequelize.INTEGER
});

module.exports = { AdasJournal };