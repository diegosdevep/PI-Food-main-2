const { Diet } = require('../db');
const { types } = require('./dietTypes');

const getDiets = async () => {
  types.forEach(async (n) => {
    await Diet.findOrCreate({
      where: {
        name: n,
      },
    });
  });
  const diets = await Diet.findAll();
  return diets;
};

module.exports = { getDiets };
