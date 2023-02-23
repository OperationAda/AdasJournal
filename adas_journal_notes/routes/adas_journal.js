//http://localhost:3000/adas_journal/

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
router.get("/", async (req, res) => {
  const getAdasJournal = await AdasJournal.findAll();
  res.json(getAdasJournal);
});
//
router.get("/:id", async (req, res) => {
  const getAdasJournal = await AdasJournal.findByPk(req.params.id);
  res.json(getAdasJournal);
});
//
router.post(
  "/",
  [
    check("title").trim().notEmpty().isLength({ min: 10, max: 30 }),
    check("notes").trim().notEmpty(),
  ],
  async (req, res) => {
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
  }
);
//
router.put("/:id", async (req, res) => {
  const getAdasJournal = await AdasJournal.findByPk(req.params.id);
  await getAdasJournal.update({
    title: req.body.title,
    locati: req.body.notes
  });
  res.json(getAdasJournal);
});
//
router.delete("/:id", async (req, res) => {
  const getAdasJournal = await AdasJournal.findByPk(req.params.id);
  await getAdasJournal.destroy();
  res.json(getAdasJournal);
});
module.exports = router;
