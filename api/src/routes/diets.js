const { Router } = require('express');
const { getAllDiets } = require('../controllers/diets');

const router = Router();

router.get('/', async (_req, res) => {
  try {
    let diets = await getAllDiets();
    res.status(200).json(diets);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

module.exports = router;
