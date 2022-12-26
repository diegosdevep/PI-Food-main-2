const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const diets = require('./diets');
const recipes = require('./recipes');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use('/diets', diets);
router.use('/recipes', recipes);

module.exports = router;
