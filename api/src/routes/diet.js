const router = require('express').Router();
const { getDiets } = require('../controllers/getDiets');

//Routes /types - tipos de dietas
router.get('/', async (_req, res) => {
  try {
    const diets = await getDiets();
    res.send(diets);
  } catch (error) {
    res.status(400).send({
      msg: 'Error, no se puedieron traer los tipos de dietas /types',
      error,
    });
  }
});

module.exports = router;
