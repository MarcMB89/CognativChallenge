import { combineReducers } from "redux";
import recipes from "./recipesReducer";
import recommended from "./recommendedReducer";

export default combineReducers({
    recipes,
    recommended,
});