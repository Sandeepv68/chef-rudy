import URL_SCHEMA from "../../Network/urls.json";
import KEYS from "../../Config/keys.json";
import Ajax from "../../Network/ajax";

import {
  GET_RECIPES_BEGIN,
  GET_RECIPES_SUCCESS,
  GET_RECIPES_ERROR,
} from "../Constants/CONSTANTS_RecipeSearch";

let ajax = new Ajax();

/**
 * Get Recipes
 */
export const getRecipesAction = (query) => {
  dispatch(getRecipesBegin());
  getRecipes(query)
    .then((response) => {
      dispatch(getRecipesSuccess(response));
      return;
    })
    .catch((error) => {
      dispatch(getRecipesError(error));
      return;
    });
};

const getRecipes = (query) => {
  let url = URL_SCHEMA.root + URL_SCHEMA.recipe_search;
  return ajax.makeRequest(url, "GET", {}, {});
};

const getRecipesBegin = () => {
  return {
    type: GET_RECIPES_BEGIN,
  };
};

const getRecipesSuccess = (response) => {
  return {
    type: GET_RECIPES_SUCCESS,
    payload: response,
  };
};

const getRecipesError = (error) => {
  return {
    type: GET_RECIPES_BEGIN,
    payload: error,
  };
};
