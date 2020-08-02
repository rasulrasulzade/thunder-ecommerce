import * as constants from "../actions/constants";
import initialState from "./initialState";

const cartReducer = (state = initialState.cart, action) => {
	switch (action.type) {
		case constants.ADD_TO_CART:
			let addedItem = state.find(el => el.product.id === action.payload.product.id);
			if (addedItem) {
				let newState = state.map(cartItem => {
					if (cartItem.product.id === action.payload.product.id) {
						return Object.assign({}, addedItem, {quantity: addedItem.quantity+1})
					}
					return cartItem
				})
				return newState
			} else {
				return [...state, {...action.payload}]
			}
		case constants.REMOVE_FROM_CART: 
			const remainState = state.filter(cartItem => cartItem.product.id !== action.payload.id);
			return remainState
		case constants.EMPTY_THE_CART:
			return []
		default:
			return state
	}
}
export default cartReducer