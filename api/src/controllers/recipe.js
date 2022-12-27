const axios = require('axios');
const { Diet, Recipe } = require('../db');
const { API_KEY, API_KEY1 } = process.env;

const get_ApiID = async (id) => {
  // const urlID = await axios.get(
  //   'https://run.mocky.io/v3/84b3f19c-7642-4552-b69c-c53742badee5'
  // );
  const urlID = await axios.get(
    `https://api.spoonacular.com/recipes/${id}/information?apiKey=5f46899dbf7b45619b69e6821dcd16a5`,
    {
      headers: { 'Accept-Encoding': 'gzip,deflate,compress' },
    }
  );

  const detail = urlID.data;

  let recipeDetail = {
    id,
    name: detail.title,
    summary: detail.summary,
    score: detail.spoonacularScore,
    healthScore: detail.healthScore,
    image: detail.image,
    steps: detail.analyzedInstructions[0]?.steps.map((s) => {
      return {
        number: s.number,
        step: s.step,
      };
    }),
    dish: detail.dishTypes,
    diets: detail.diets,
  };
  console.log(recipeDetail);
  return recipeDetail;
};

const get_DataBaseID = async (id) => {
  return await Recipe.findByPk(id, {
    include: {
      model: Diet,
      attributes: ['name'],
      through: {
        attributes: [],
      },
    },
  });
};

const get_Api = async () => {
  // const resApi = await axios.get(
  //   'https://run.mocky.io/v3/84b3f19c-7642-4552-b69c-c53742badee5'
  // );

  const resApi = await axios.get(
    `https://api.spoonacular.com/recipes/complexSearch?apiKey=5f46899dbf7b45619b69e6821dcd16a5&addRecipeInformation=true&number=100`,
    {
      headers: { 'Accept-Encoding': 'gzip,deflate,compress' },
    }
  );

  const { results } = resApi.data;

  const infoApi = await results?.map((r) => {
    return {
      id: r.id,
      name: r.title,
      summary: r.summary,
      score: r.spoonacularScore,
      healthScore: r.healthScore,
      image: r.image,
      steps: r.analyzedInstructions[0]?.steps.map((s) => {
        return {
          number: s.number,
          step: s.step,
        };
      }),
      diets: r.diets,
      dish: r.dishTypes,
    };
  });
  console.log(infoApi);
  return infoApi;
};

const get_DataBase = async () => {
  return await Recipe.findAll({
    include: {
      model: Diet,
      attributes: ['name'],
      through: {
        attributes: [],
      },
    },
  });
};

const get_AllRecipes = async () => {
  const getApi = await get_Api();
  const getDataBase = await get_DataBase();
  const all = getApi.concat(getDataBase);
  // const all = [...getApi, ...getDataBase]
  return all;
};

module.exports = {
  get_AllRecipes,
  get_DataBase,
  get_Api,
  get_DataBaseID,
  get_ApiID,
};
