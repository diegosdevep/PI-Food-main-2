import {
  GET_RECIPES,
  GET_RECIPES_BY_NAME,
  GET_RECIPE_BY_ID,
  GET_DIETS,
  FILTER_BY_DIET,
  FILTER_AZ,
} from '../actions';

const initialState = {
  recipes: [],
  allRecipes: [],
  recipeById: {},
  diets: [],
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_RECIPES:
      return {
        ...state,
        recipes: action.payload,
        allRecipes: action.payload,
      };
    case GET_RECIPES_BY_NAME:
      return {
        ...state,
        recipes: action.payload,
      };
    case GET_RECIPE_BY_ID:
      return {
        ...state,
        recipeById: action.payload,
      };
    case GET_DIETS:
      return {
        ...state,
        diets: action.payload,
      };
    case FILTER_BY_DIET:
      const recipes = state.allRecipes;
      const filterDiet =
        action.payload === 'all'
          ? recipes
          : recipes.filter((recipe) =>
              recipe.diets.find(
                (diet) =>
                  diet.name === action.payload || diet === action.payload
              )
            );
      return {
        ...state,
        recipes: filterDiet,
      };

    case FILTER_AZ:
      let sortAZ =
        action.payload === 'az'
          ? state.allRecipes.sort(function (a, b) {
              if (a.name.toLowerCase() > b.name.toLowerCase()) return 1;
              if (a.name.toLowerCase() < b.name.toLowerCase()) return -1;
              return 0;
            })
          : action.payload === 'za'
          ? state.allRecipes.sort(function (a, b) {
              if (a.name.toLowerCase() < b.name.toLowerCase()) return 1;
              if (a.name.toLowerCase() > b.name.toLowerCase()) return -1;
              return 0;
            })
          : state.allRecipes;
      return {
        ...state,
        allRecipes: sortAZ,
      };
    default:
      return state;
  }
}
