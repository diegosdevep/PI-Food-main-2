const { Diet } = require('../db');

const dietsTypes = [
  { name: 'gluten free' },
  { name: 'ketogenic' },
  { name: 'vegetarian' },
  { name: 'lacto-vegetarian' },
  { name: 'lacto ovo vegetarian' },
  { name: 'vegan' },
  { name: 'pescatarian' },
  { name: 'paleolithic' },
  { name: 'primal' },
  { name: 'whole 30' },
];

const getAllDiets = async () => {
  const preDiets = await Diet.findAll();

  if (preDiets.length) {
    return preDiets;
  }

  dietsTypes.map((diet) => {
    Diet.findOrCreate({
      where: { name: diet.name },
    });
  });

  let diets = await Diet.findAll();
  return diets;
};

module.exports = {
  getAllDiets,
};
