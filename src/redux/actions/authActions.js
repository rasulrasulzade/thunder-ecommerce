import * as constants from "./constants";
import { call, put } from "redux-saga/effects";
import { postDataToApi, getDataFromApi } from "./api";

const singUp = data => {
	return { type: constants.SIGN_UP, payload: data }
}

export const signIn = (user) => {
	return { type: constants.SIGN_IN, payload: user }
}

const authError = (message) => {
	return { type: constants.AUTH_ERROR, payload: message }
}

export function* signUpSaga(action) {
	const url = "http://localhost:3002/users";
	const users = yield call(getDataFromApi, url);
	const user = users.find(user => user.email === action.payload.email);
	if (!user) {
		try {
		    const data = yield call(postDataToApi, {url, user: action.payload});
		    localStorage.setItem("authenticatedUser", {...user, status: true});
		    yield put(singUp(data));
		} catch (error) {
		    console.log(error)
		}
	} else {
	    yield put(authError("This Email is already taken"))
	}

	
}


export function* signInSaga(action) {
	const url = "http://localhost:3002/users";
	try {
	    const users = yield call(getDataFromApi, url);
	    const user = users.find(user => user.email === action.payload.email && user.password === action.payload.password)
	    if (user) {
	    	localStorage.setItem("authenticatedUser", {...user, status: true});
	    	yield put(signIn(user));
	    } else {
	    	yield put(authError("Email or Password is incorrect"))
	    }    
	} catch (error) {
	    console.log(error)
	}
}

export const signOut = () => {
	localStorage.removeItem("authenticatedUser");
	return { type: constants.SIGN_OUT }
}
