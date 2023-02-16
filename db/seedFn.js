const {sequelize} = require('./db');
const {AdaJournal} = require('.');
const notes = require('./seedData');

const seed = async () => {
  await sequelize.sync({ force: true }); // recreate db
  await AdaJournal.bulkCreate(notes);
};

module.exports = seed;