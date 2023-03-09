const Sequelize = require("sequelize");
const {sequelize} = require("../db");
const {AdasJournal} = require('./AdasJournal')
const {User} = require('./User')

User.associate = models => {
    User.hasMany(models.AdasJournal, {
    foreignKey: 'adaId'});
}

AdasJournal.associate = (models) => {
  AdasJournal.belongsTo(models.User, {
    foreignKey: 'adaId'});

    
    
module.exports = {AdasJournal};
