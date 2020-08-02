import * as constants from "../actions/constants"
import initialState from "./initialState";

const changeCategoryReducer = (state=initialState.currentCategory.categoryName,action) => {
    switch(action.type) {
        case constants.CHANGE_CATEGORY:
            return action.payload;
        default:
            return state;
    }

}
export default changeCategoryReducer;