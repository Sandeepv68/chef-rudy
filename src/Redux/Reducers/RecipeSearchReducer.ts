import {
  GET_RECIPES_BEGIN,
  GET_RECIPES_SUCCESS,
  GET_RECIPES_ERROR,
} from "../Constants/CONSTANTS_RecipeSearch";

const initialState = {
  loading: false,
  recipe: {},
  error: null,
};

export const recipeSearchReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_RECIPES_BEGIN:
      return {
        ...state,
        loading: true,
      };
    case GET_RECIPES_SUCCESS:
      return {
        ...state,
        loading: false,
        recipe: action.payload,
      };
    case GET_RECIPES_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
