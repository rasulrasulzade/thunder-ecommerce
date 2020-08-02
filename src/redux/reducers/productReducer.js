import * as constants from "../actions/constants";
import initialState from "./initialState"

const productReducer = (state=initialState.products, action) => {
	switch(action.type) {
		case constants.GET_PRODUCTS_SUCCESS:
			return action.payload
		case constants.BUY_THE_CART:
			for (let product of state ) {
				if (product.id === action.payload.id) {
					product = Object.assign(product, action.payload)
				} 
			}	
			return [...state]
		default: 
			return state
	}
}
export default productReducer