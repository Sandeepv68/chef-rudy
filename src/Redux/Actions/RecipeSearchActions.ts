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
  return (dispatch) => {
    dispatch(getRecipesBegin());
    return getRecipes(query)
      .then((response) => {
        dispatch(getRecipesSuccess(response));
        return;
      })
      .catch((error) => {
        dispatch(getRecipesError(error));
        return;
      });
  };
};

const getRecipes = (searchQuery) => {
  let query = {
    q: searchQuery,
    app_id: KEYS.recipe_search.app_id,
    app_key: KEYS.recipe_search.app_key,
  };
  let url = URL_SCHEMA.root + URL_SCHEMA.recipe_search.base;
  return ajax.makeRequest(url, "GET", { ...query }, {});
};

const getRecipesBegin = () => {
  return {
    type: GET_RECIPES_BEGIN,
  };
};

const getRecipesSuccess = (response) => {
  return {
    type: GET_RECIPES_SUCCESS,
    payload: response.data,
  };
};

const getRecipesError = (error) => {
  return {
    type: GET_RECIPES_BEGIN,
    payload: error,
  };
};
///////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////