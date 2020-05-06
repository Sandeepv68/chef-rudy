import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import { recipeSearchReducer } from "../Reducers/RecipeSearchReducer";
import { analyzeRecipeReducer } from "../Reducers/AnalyzeRecipeReducer";

const rootReducer = combineReducers({ recipeSearchReducer, analyzeRecipeReducer });

const chefRudyStore = () => {
  return createStore(rootReducer, applyMiddleware(thunk));
};

export default chefRudyStore;
