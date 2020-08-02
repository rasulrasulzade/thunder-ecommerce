import * as constants from "./constants"
import { getDataFromApi } from "./api";
import { call, put } from "redux-saga/effects";

const getProductsSuccess = (data) => {
	return {type: constants.GET_PRODUCTS_SUCCESS, payload: data}
}

export function* getProductsSaga(action) {
	let url = "http://localhost:3002/products"
	if (action.payload) {
	    url = url + "?categoryId=" + action.payload.id;
	}
	try {
	    const data = yield call(getDataFromApi, url);
	    yield put(getProductsSuccess(data));
	} catch (error) {
	    console.log(error)
	}
}
