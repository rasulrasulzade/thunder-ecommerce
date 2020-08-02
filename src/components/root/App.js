import React from 'react';
import { Container } from "reactstrap";
import { useDispatch } from "react-redux";
import Navbar from "../navbar/Navbar";
import { Switch, Route } from "react-router-dom";
import Dashboard from "./Dashboard";
import NotFound from "./NotFound";
import SignUp from "../auth/SignUp";
import SignIn from "../auth/SignIn";
import { SignedInRoute, SignedOutRoute } from "./privateRoute";
import { signIn } from "../../redux/actions/authActions";


const App = () => {

  const dispatch = useDispatch();
  const user = localStorage.getItem("authenticatedUser");
  if(user) {
    dispatch(signIn(user));
  }

  return (
    <div>
    	<Navbar/>
      	<Container>
      		<Switch>
            <SignedInRoute path="/" exact component={Dashboard}/>
            <SignedOutRoute path="/signup" exact component={SignUp}/>
            <SignedOutRoute path="/signin" exact component={SignIn}/>
		        <Route component={NotFound}/>
      		</Switch>
      	</Container>
    </div>
  );
}

export default App;
