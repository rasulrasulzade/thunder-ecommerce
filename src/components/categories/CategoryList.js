import React, { useEffect } from "react";
import { ListGroup, ListGroupItem, Badge } from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import * as categoryActions from "../../redux/actions/categoryActions";
import * as constants from "../../redux/actions/constants";
import "./CategoryList.css";


const CategoryList = () => {
	const categories = useSelector((state) => state.categoryReducer);
	const dispatch = useDispatch();
	const currentCategory = useSelector((state) => state.changeCategoryReducer);

	useEffect(() => {
    	dispatch({type: constants.GET_CATEGORIES_REQUESTED});
  	}, []);

	const changeCategory = (category) => {
		dispatch(categoryActions.changeCategory(category));
		dispatch({type: constants.GET_PRODUCTS_REQUESTED, payload: category});
	}

	const showAllProducts = () => {
    dispatch(categoryActions.changeCategory(""));
    dispatch({type: constants.GET_PRODUCTS_REQUESTED});
  }
	return (
		<div>
			<h1>
		        <Badge color="warning" className="categories" onClick={showAllProducts}>
		          Categories
		        </Badge>
	      	</h1>
			<ListGroup>	
				{categories && categories.map(category => (
					<ListGroupItem 
					className="category"
					key={category.id}
					active={category.id === currentCategory.id}
					onClick={() => changeCategory(category)}
					>
						{category.categoryName}
					</ListGroupItem>
					)
				)}
      		</ListGroup>
		</div>
	)
}

export default CategoryList;