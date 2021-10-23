import actionTypes from "../actions/actionTypes";

export default function recipesReducer(recipes = [], action) {
    let newRecipes = recipes;
  
    switch (action.type) {
      case actionTypes.LOAD_RECIPES:
        newRecipes = action.data;
        break;
  
      default:
        break;
    }
    return newRecipes;
  }
  