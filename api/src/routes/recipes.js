const router = require('express').Router();
const { getRecipes } = require('../controllers/getRecipes');
const { getRecipeById } = require('../controllers/getRecipeById');

// GET /recipes?name="...":
// Obtener un listado de las recetas que contengan la palabra ingresada como query parameter
// Si no existe ninguna receta mostrar un mensaje adecuado
router.get('/', async (req, res) => {
  try {
    const { name } = req.query;
    const recipes = await getRecipes(name);
    res.status(200).send(recipes);
  } catch (error) {
    res.status(400).send(error);
  }
});

// GET /recipes/{idReceta}:
// Obtener el detalle de una receta en particular
// Debe traer solo los datos pedidos en la ruta de detalle de receta
// Incluir los tipos de dieta asociados
router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const recipeById = await getRecipeById(id);
    res.status(200).send(recipeById);
  } catch (error) {
    res.status(400).send({ msg: 'Error el ID no existe', error });
  }
});

module.exports = router;
