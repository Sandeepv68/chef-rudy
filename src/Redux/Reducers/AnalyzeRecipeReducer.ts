import {
  ANALYZE_RECIPES_BEGIN,
  ANALYZE_RECIPES_SUCCESS,
  ANALYZE_RECIPES_ERROR,
} from "../Constants/CONSTANTS_AnalyzeRecipe";

const initialState = {
  loading: false,
  data: {},
  error: null,
};

export const analyzeRecipeReducer = (state = initialState, action) => {
  switch (action.type) {
    case ANALYZE_RECIPES_BEGIN:
      return {
        ...state,
        loading: true,
      };
    case ANALYZE_RECIPES_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case ANALYZE_RECIPES_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
