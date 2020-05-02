import { createStore, combineReducers, applyMiddleware  } from "redux";
import thunk from "redux-thunk";

import { recipeSearchReducer } from "../Reducers/RecipeSearchReducer";

const rootReducer = combineReducers({ recipeSearchReducer });

const chefRudyStore = () => {
  return createStore(rootReducer, applyMiddleware(thunk));
};

export default chefRudyStore;
