import * as constants from "./constants";
import { all, takeLatest } from "redux-saga/effects";
import { getCategoriesSaga } from "./categoryActions";
import { getProductsSaga } from "./productActions";
import { buyTheCartSaga } from "./cartActions";
import { signUpSaga, signInSaga } from "./authActions";


export default function* rootSaga() {
  yield all([
    takeLatest(constants.GET_CATEGORIES_REQUESTED, getCategoriesSaga),
    takeLatest(constants.GET_PRODUCTS_REQUESTED, getProductsSaga),
    takeLatest(constants.BUY_THE_CART_REQUESTED, buyTheCartSaga),
    takeLatest(constants.SIGN_UP_REQUESTED, signUpSaga),
    takeLatest(constants.SIGN_IN_REQUESTED, signInSaga)
  ]);
}