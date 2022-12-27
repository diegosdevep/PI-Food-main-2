const { Router } = require('express');
const { Recipe, Diet } = require('../db');
const { types } = require('../controllers/diet');
const router = Router();

// POST /recipe:
// Recibe los datos recolectados desde el formulario controlado de la ruta de creación de recetas por body
// Crea una receta en la base de datos
router.post('/', async (req, res, next) => {
  const { name, summary, score, healthScore, image, steps, diets } = req.body;
  try {
    const newRecipe = await Recipe.create({
      name,
      summary,
      score,
      healthScore,
      image,
      steps,
    });

    let dietDB = await Diet.findAll({
      where: {
        name: diets,
      },
    });

    newRecipe.addDiet(dietDB);

    let aux = diets.pop();
    let validate = types.includes(aux);
    if (!validate) {
      let noRepeat = Diet.findAll({
        where: {
          name: aux,
        },
      });
      if (!noRepeat.length) {
        const newDiet = await Diet.create({ name: aux });
        newRecipe.addDiet(newDiet);
        types.push(aux);
      }
    }
    res.status(200).send('Lo lograste guacho');
  } catch (err) {
    next(err);
  }
});

module.exports = router;
