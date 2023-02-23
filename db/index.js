const {AdaJournal} = require('./AdaJournal');
const {User} = require('./User');
const {sequelize, Sequelize} = require('./db');
const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.get('/adaJournal', async (req, res, next) => {
    const where = {};
    for (const key of ['title', 'notes']) {
      if (req.query[key]) {
        where[key] = {
          [Op.like]: `%${req.query[key]}%`, 
        };
      }
    }
  
    try {
      const adaJournal = await AdaJournal.findAll({ where });
      res.send(adaJournal);
    } catch (error) {
      console.log(error.message);
      next(error);
    }
  });
  
app.post(`/adaJournal`, async (req, res, next) => {
    try {
      const { title, notes} = req.body;
      const adaJournal = await AdaJournal.create({ title, notes});
      res.json({ message: 'success', adaJournal });
    } catch (error) {
      console.log(error.message);
      next(error);
    }
  });
  app.delete('/adaJournal/:id', async (req, res, next) => {
    try {
      const id = req.params.id;
  
      const adaJournal = await AdaJournal.findByPk(id);
  
      if (!adaJournal) {
        res
          .status(404)
          .json({ message: `AdaJournal with id of ${id} could not be found!` });
      }
  
      await AdaJournal.destroy({ where: { id } });
      console.log(deleteAdaJournal);
      res.json({ message: 'successful deletion', adaJournal });
    } catch (error) {
      console.log(error);
      next(error);
    }
  });
  
module.exports = {
    AdaJournal,User,
    sequelize,
    Sequelize
};