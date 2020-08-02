import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Table, Button } from "reactstrap";
import * as constants from "../../redux/actions/constants";
import * as cartActions from "../../redux/actions/cartActions";
import { TiShoppingCart} from "react-icons/ti"

const ProductList = () => {
	const dispatch = useDispatch();
	const products = useSelector(state => state.productReducer);
	const cart = useSelector(state => state.cartReducer)
	const[allSelectedProducts, setAllSelectedProducts] = useState([]);

	useEffect(() => {
    	dispatch({type: constants.GET_PRODUCTS_REQUESTED});
  	}, []);

	const authenticatedUser = useSelector(state => state.authReducer);

	const addToCart = (product) => {
	    dispatch(cartActions.addToCart({ quantity: 1, product }));
	    for (let cartItem of cart) {
			if (cartItem.product.id === product.id && cartItem.quantity + 1 === product.quantityInStock) {
				setAllSelectedProducts([...allSelectedProducts, product.productName])			
			}
		}
	  };

	const renderProduct = product => {
		return (<tr key={product.id}>
		        		<td>{product.productName}</td>
		        		<td className="text-nowrap">{product.price} $</td>
		        		<td> {
		        			allSelectedProducts.includes(product.productName) ? "out of stock" :
		        			<Button color="success" className="text-nowrap" onClick={() => addToCart(product)}>
		        				add <TiShoppingCart/>
		                	</Button>
		                }
		        		</td>
	
		   </tr>)
	}

	return (
		<div>  
			<Table>
		        <thead>
		          <tr>
		            <th>Product Name</th>
		            <th>Price</th>
		            <th></th>
		          </tr>
		        </thead>
		        <tbody>
		        {products.map(product => (
		        	product.quantityInStock !== 0 ? renderProduct(product) : null
		        	)
		        )}
		        </tbody>
	        </Table>
		</div>
	)
}
export default ProductList