const {AdaJournal} = require('./AdaJournal');
const {User} = require('./User');
const {sequelize, Sequelize} = require('./db');

module.exports = {
    AdaJournal,User,
    sequelize,
    Sequelize
};