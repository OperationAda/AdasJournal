const Sequelize = require("sequelize");
const {sequelize} = require("../db");

const User = sequelize.define('User', {
    id: {type: Sequelize.INTEGER,
        autoIncrement: true,
        primarykey: true},
    firstName: Sequelize.STRING,
    surname: Sequelize.STRING,
    email: Sequelize.STRING,
    password: Sequelize.STRING,
    passwordver: Sequelize.STRING
});

module.exports = {User}
