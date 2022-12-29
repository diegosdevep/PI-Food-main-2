const { Recipe, Diet } = require('../db');
const { types } = require('./dietTypes');

const createReceta = async ({
  name,
  summary,
  score,
  healthScore,
  image,
  steps,
  diets,
}) => {
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
    let noRepeat = await Diet.findAll({ where: { name: aux } });

    if (!noRepeat.length) {
      const newDiet = await Diet.create({ name: aux });
      newRecipe.addDiet(newDiet);

      types.push(aux);
    }
  }
  return newRecipe;
};

module.exports = { createReceta };
