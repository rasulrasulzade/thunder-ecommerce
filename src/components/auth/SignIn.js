import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import TextField from "../toolbox/TextField";
import * as constants from "../../redux/actions/constants";
import Button from "../toolbox/Button";
import "./AuthForm.css";

const SignIn = () => {
	const dispatch = useDispatch();
	const [user, setUser] = useState({email: "", password: ""});
	const [emailError, setEmailError] = useState("");
	const [passwordError, setPasswordError] = useState("");
	const authenticatedUser = useSelector(state => state.authReducer);

	
	const handleChange = e => {
		const { name, value } = e.target;
		setUser({...user, ...{ [name]: value }})
	}

	const handleSubmit = e => {
		e.preventDefault();

		if (user.email === "") {
			setEmailError("Please fill out this field")
		} else {
			setEmailError("");
		}
		 
		if (user.password === "") {
			setPasswordError("Please fill out this field");
		} else if (user.password.length < 4) {
			setPasswordError("Please enter at least 4 characters");
		} else {
			setPasswordError("")
		}

		if (!emailError && !passwordError && user.email && user.password.length >= 4) {
			dispatch({type: constants.SIGN_IN_REQUESTED, payload: user})
		}
		
	}

	return (
    <div className="container mt-5">
      <form onSubmit={handleSubmit} className="my-form mx-auto auth-form">
        <h1 className="text-center form-header">Sign In</h1>

        <TextField name="email" label="Email" type="email" onChange={handleChange} placeHolder="your email..." value={user.email} error={emailError}/>
        <TextField name="password" label="Password" type="password" onChange={handleChange} placeHolder="your password..." value={user.password} error={passwordError}/>

        <Button value="Login"/>

       
        {authenticatedUser.authError? 
        	<div className="text-center text-danger"> {authenticatedUser.authError}</div>
        : null}
        

      </form>
     </div>)

}

export default SignIn;