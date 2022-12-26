require('dotenv').config();
const axios = require('axios');
const { DB_USER, DB_PASSWORD, DB_HOST, API_KEY } = process.env;

const getApiInfo = async () => {
  try {
    // const url = await axios.get('https://run.mocky.io/v3/84b3f19c-7642-4552-b69c-c53742badee5');
    const url = await axios.get(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&addRecipeInformation=true&number=100`,
      { headers: { 'Accept-Encoding': 'null' } }
    );
    const result = await url.data.results.map((e) => {
      return {
        id: e.id,
        image: e.image,
        name: e.title,
        dietTypes: e.diets,
        summary: e.summary,
        score: e.spoonacularScore,
        healthScore: e.healthScore,
        dishTypes: e.dishTypes,
        steps: e.analyzedInstructions[0]?.steps.map((e) => {
          return {
            number: e.number,
            step: e.step,
          };
        }),
      };
    });

    return result;
  } catch (error) {
    console.log('ERROR EN getApiInfo/controllers', error);
  }
};
getApiInfo();
module.exports = { getApiInfo };
