import * as constants from "../actions/constants";
import initialState from "./initialState";

const authReduer = (state = initialState.authenticatedUser, action) => {
	switch(action.type) {
		case constants.SIGN_UP:
			return {...action.payload, status: true}
		case constants.SIGN_IN:
			return {...action.payload, status: true}
		case constants.AUTH_ERROR:
			return {...state, authError: action.payload}
		case constants.SIGN_OUT:
			return {status: false, authError: ""}
		default:
			return state
	}
}
export default authReduer