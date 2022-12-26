const { Router } = require('express');

const router = Router();

router.get('/', async (_req, res) => {
  try {
    console.log('asdasd');
  } catch (error) {
    res.status(400).send(error.message);
  }
});

module.exports = router;
