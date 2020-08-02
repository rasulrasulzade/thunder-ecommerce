import React from 'react';
import { Nav, NavItem, NavLink, Container } from 'reactstrap';
import { Link } from "react-router-dom";
import "./navbar.css"
import Cart from "../cart/Cart";
import { useDispatch, useSelector } from "react-redux";
import { signOut } from "../../redux/actions/authActions"

const Navbar = (props) => {

  const authenticatedUser = useSelector(state => state.authReducer);
  const dispatch = useDispatch();

  const handleSignOut = () => {
    dispatch(signOut());
  }

  return (
    <div className="my-navbar mb-3">
      <Container className="d-flex align-items-center justify-content-between">
      <div className="logo">
        <NavLink href="/" className="text-white">thunder</NavLink>
      </div>
      {authenticatedUser.status ? 
        <Nav className="nv-list">
          <NavItem>
              <Link to ="/" className="nav-link text-white">Home</Link>
          </NavItem>
          <NavItem>
              <Link to ="/" onClick={handleSignOut} className="nav-link text-white">Sign out</Link>
          </NavItem>
           <Cart/>
        </Nav> :
        <Nav className="nv-list">
          <NavItem>
            <Link to ="/signup" className="nav-link text-white">Sign Up</Link>
          </NavItem>
          <NavItem>
            <Link to ="/signin" className="nav-link text-white">Sign In</Link>
          </NavItem> 
        </Nav>
      }     
        </Container>
    </div>
  );
}

export default Navbar;