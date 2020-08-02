import React from "react";
import { Redirect, Route} from "react-router-dom";
import { useSelector } from "react-redux";

export const SignedInRoute = ({ component: Component, ...rest }) => {

	const authenticatedUser = useSelector(state => state.authReducer);

	return (
		<Route
			{...rest}
			render = {props => 
				authenticatedUser.status? (<Component {...props} />)
				:(
					<Redirect to={{
						pathname: "/signin"
					}} />
				)
			}
		/>
	)
	
}

export const SignedOutRoute = ({ component: Component, ...rest }) => {

	const authenticatedUser = useSelector(state => state.authReducer);

	return (
		<Route
			{...rest}
			render = {props => 
				!authenticatedUser.status? (<Component {...props} />)
				:(
					<Redirect to={{
						pathname: "/"
					}} />
				)
			}
		/>
	)
	
}