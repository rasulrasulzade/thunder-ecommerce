import React from "react";
import "./Button.css";

const Button = ({value}) => {
	return (
	<button type="submit" className="submit-button">
		{value}
	</button>)
}

export default Button