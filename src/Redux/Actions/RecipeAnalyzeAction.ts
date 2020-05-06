import URL_SCHEMA from "../../Network/urls.json";
import KEYS from "../../Config/keys.json";
import Ajax from "../../Network/ajax";

import {
  ANALYZE_RECIPES_BEGIN,
  ANALYZE_RECIPES_SUCCESS,
  ANALYZE_RECIPES_ERROR,
} from "../Constants/CONSTANTS_AnalyzeRecipe";

let ajax = new Ajax();

/**
 * Analyze Recipe
 */
export const analyzeRecieAction = (recipes, servings) => {
  return (dispatch) => {
    dispatch(analyzeRecipesBegin());
    return analyzeRecipes(recipes, servings)
      .then((response) => {
        dispatch(analyzeRecipesSuccess(response));
        return;
      })
      .catch((error) => {
        dispatch(analyzeRecipesError(error));
        return;
      });
  };
};

const analyzeRecipes = (recipes, servings) => {
  let query = {
    app_id: KEYS.nutrition_analysis.app_id,
    app_key: KEYS.nutrition_analysis.app_key,
  };
  let body = {
    ingr: recipes.split(","),
    yield: servings,
  };
  let url = URL_SCHEMA.root + URL_SCHEMA.nutrition_analysis.base;
  return ajax.makeRequest(url, "POST", { ...query }, { ...body });
};

const analyzeRecipesBegin = () => {
  return {
    type: ANALYZE_RECIPES_BEGIN,
  };
};

const analyzeRecipesSuccess = (response) => {
  return {
    type: ANALYZE_RECIPES_SUCCESS,
    payload: response.data,
  };
};

const analyzeRecipesError = (error) => {
  return {
    type: ANALYZE_RECIPES_ERROR,
    payload: error,
  };
};
///////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////
