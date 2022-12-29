const router = require('express').Router();
const recipe = require('./recipe.js');
const recipes = require('./recipes.js');
const diet = require('./diet.js');

router.use('/recipe', recipe);
router.use('/recipes', recipes);
router.use('/types', diet);

module.exports = router;
