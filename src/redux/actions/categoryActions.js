import * as constants from "./constants"
import { getDataFromApi } from "./api";
import { call, put } from "redux-saga/effects";

const getCategoriesSuccess = (data) => {
	return {type: constants.GET_CATEGORIES_SUCCESS, payload: data}
}

export function* getCategoriesSaga(action) {
	const url = "http://localhost:3002/categories"
	try {
	    const data = yield call(getDataFromApi, url);
	    yield put(getCategoriesSuccess(data));
	} catch (error) {
	    console.log(error)
	}
}

export const changeCategory = (category) => {
  return { type: constants.CHANGE_CATEGORY, payload: category };
};