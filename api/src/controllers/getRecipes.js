const { get_AllRecipes } = require('./recipe');

const getRecipes = async (name) => {
  let AllRecipes = await get_AllRecipes();

  if (name) {
    let recipeByName = await AllRecipes.filter((r) =>
      r.name.toLowerCase().includes(name.toString().toLowerCase())
    ); // Utilizo LowerCase para evitar problemas con la comparación.
    if (recipeByName.length) {
      let recipes = recipeByName.map((r) => {
        return {
          id: r.id,
          name: r.name,
          summary: r.summary,
          score: r.score,
          healthScore: r.healthScore,
          image: r.image,
          steps: r.steps,
          diets: r.diets ? r.diets : r.diets.map((r) => r.name),
        };
      });
      return recipes;
    }
    return 'Esta receta no existe.';
  } else {
    // Si no tengo nombre, devuelvo todas las recetas.
    let recipes = AllRecipes.map((r) => {
      return {
        id: r.id,
        name: r.name,
        summary: r.summary,
        score: r.score,
        healthScore: r.healthScore,
        image: r.image,
        steps: r.steps,
        diets: r.diets ? r.diets : r.diets.map((r) => r.name),
      };
    });
    return recipes;
  }
};

module.exports = { getRecipes };
