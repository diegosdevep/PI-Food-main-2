const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const router = Router();
const recipe = require('./recipe.js');
const recipes = require('./recipes.js');
const diet = require('./diet.js');

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/recipe', recipe);
router.use('/recipes', recipes);
router.use('/types', diet);

module.exports = router;
