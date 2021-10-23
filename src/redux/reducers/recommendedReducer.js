import actionTypes from "../actions/actionTypes";

export default function recommendedReducer(recommended = [], action) {
    let newRecommended = recommended;
  
    switch (action.type) {
      case actionTypes.LOAD_RECOMMENDED:
        newRecommended = action.data;
        break;
  
      default:
        break;
    }
    return newRecommended;
  }
  