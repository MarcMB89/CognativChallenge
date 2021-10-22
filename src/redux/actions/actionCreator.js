import axios from "axios";
import actionTypes from "./actionTypes";

export function loadRecipes() {
  return async dispatch => {
    try {
      const { data } = await axios.get("https://virated-api.herokuapp.com/recipes");
      dispatch({
        type: actionTypes.LOAD_RECIPES,
        data,
      });
    } catch (error) {
     
    }
  };
}
export function loadRecommended() {
  return async dispatch => {
    try {
      const { data } = await axios.get("https://virated-api.herokuapp.com/recipes?recommended=1");
      dispatch({
        type: actionTypes.LOAD_RECOMMENDED,
        data,
      });
    } catch (error) {}
  };
}