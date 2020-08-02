import * as constants from "../actions/constants";
import initialState from "./initialState"

const categoryReducer = (state=initialState.categories, action) => {
	switch(action.type) {
		case constants.GET_CATEGORIES_SUCCESS:
			return action.payload
		default: 
			return state
	}
}
export default categoryReducer