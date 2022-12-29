const { get_DataBaseID, get_ApiID } = require('../controllers/recipe');

const getRecipeById = async (id) => {
  //   Si tiene el guion es pq se encuentra en base de datos.
  let validate = id.includes('-');

  if (validate) {
    let recipeDB = await get_DataBaseID(id);
    return recipeDB;
  } else {
    // Se encuentra en la API
    let recipeAPI = await get_ApiID(id);
    return recipeAPI;
  }
};

module.exports = {
  getRecipeById,
};
