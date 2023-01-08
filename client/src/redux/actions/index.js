import axios from 'axios';
export const GET_RECIPES = 'GET_RECIPES';
export const GET_RECIPES_BY_NAME = 'GET_RECIPES_BY_NAME';
export const GET_RECIPE_BY_ID = 'GET_RECIPES_BY_ID';
export const GET_DIETS = 'GET_DIETS';
export const FILTER_BY_DIET = 'FILTER_BY_DIET';
export const FILTER_AZ = 'FILTER_AZ';

export function getRecipes() {
  return function (dispatch) {
    axios
      .get(`http://localhost:3001/recipes`)
      .then((response) => {
        return dispatch({ type: GET_RECIPES, payload: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  };
}

export function getRecipesByName(name) {
  return (dispatch) => {
    axios
      .get(`http://localhost:3001/recipes?name=${name}`)
      .then((response) => {
        dispatch({
          type: GET_RECIPES_BY_NAME,
          payload: response.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
}

export function getRecipeById(id) {
  return (dispatch) => {
    axios.get(`http://localhost:3001/recipes/${id}`).then((response) => {
      dispatch({
        type: GET_RECIPE_BY_ID,
        payload: response.data,
      });
    });
  };
}

export function getDiets() {
  return (dispatch) => {
    axios.get(`http://localhost:3001/types`).then((response) => {
      dispatch({ type: GET_DIETS, payload: response.data });
    });
  };
}

export function filterByDiet(payload) {
  return {
    type: FILTER_BY_DIET,
    payload,
  };
}

export function filterAZ(payload) {
  return {
    type: FILTER_AZ,
    payload,
  };
}
