//https://localhost:3000/adas_journal/

const express = require("express");
const router = express.Router();

const { AdasJournal } = require("../models/AdasJournal");
const { check, validationResult } = require("express-validator");
router.use(express.json());
router.use(express.urlencoded({ extended: true }));

//middleware
router.use(express.json());
router.use(express.urlencoded({ extended: true }));

//endpoints
//find all
router.get("/", async (req, res, next) => {
  const isAuth  = req.oidc.isAuthenticated();
  if (isAuth) {
  try{
  const getAdasJournal = await AdasJournal.findAll();
  res.json(getAdasJournal);
  }catch(error){
   next(error);
  }
  } else {
    res.send("authentication failed")
  }
});
//
router.get("/:id", async (req, res, next) => {
  try{
  const getAdasJournal = await AdasJournal.findByPk(req.params.id);
  res.json(getAdasJournal);
  }catch(error){
   next(error);
  }
});
//
router.post(
  "/",
  [
    check("title").trim().notEmpty().isLength({ min: 10, max: 30 }),
    check("notes").trim().notEmpty(),
  ],
  async (req, res, next) => {
    try{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.json({ error: errors.array() });
    } else {
      const getAdasJournal = await AdasJournal.create({
        title: req.body.title,
        notes: req.body.notes
      });
      res.json(getAdasJournal);
    }
    }catch(error){
     next(error); 
    }
  }
);
//
router.put("/:id", async (req, res, next) => {
  try{
  const getAdasJournal = await AdasJournal.findByPk(req.params.id);
  await getAdasJournal.update({
    title: req.body.title,
    notes: req.body.notes
  });
  res.json(getAdasJournal);
  }catch(error){
   next(error); 
  }
});
//
router.delete("/:id", async (req, res, next) => {
  try{
  const getAdasJournal = await AdasJournal.findByPk(req.params.id);
  await getAdasJournal.destroy();
  res.json(getAdasJournal);
  }catch(error){
   next(error); 
  }
});
module.exports = router;
