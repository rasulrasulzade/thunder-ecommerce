import { combineReducers } from "redux";
import categoryReducer from "./categoryReducer";
import productReducer from "./productReducer";
import changeCategoryReducer from "./changeCategoryReducer";
import cartReducer from "./cartReducer";
import authReducer from "./authReducer"

const rootReducer = combineReducers({
	categoryReducer,
	productReducer,
	changeCategoryReducer,
	cartReducer,
	authReducer
})
export default rootReducer