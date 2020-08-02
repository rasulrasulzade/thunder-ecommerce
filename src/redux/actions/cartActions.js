import * as constants from "./constants";
import { putDataToApi } from "./api";
import { call, put } from "redux-saga/effects";


export const addToCart = cartItem => {
	return {type: constants.ADD_TO_CART, payload: cartItem}
}

export const removeFromCart = product => {
	return {type: constants.REMOVE_FROM_CART, payload: product}
}

const buyTheCart = (data) => {
	return {type: constants.BUY_THE_CART, payload: data}
}

const clearTheCart = () => {
	return {type: constants.EMPTY_THE_CART, payload: ""}
}

export function* buyTheCartSaga(action) {
	const url = "http://localhost:3002/products/" + action.payload.product.id;
	const product = {...action.payload.product, quantityInStock: action.payload.product.quantityInStock - action.payload.quantity }
	try {
	    const data = yield call(putDataToApi, {url, product});
	    yield put(buyTheCart(data));
	    yield put(clearTheCart());
	} catch (error) {
	    console.log(error)
	}
}