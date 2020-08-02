import React from "react";
import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavItem,
  NavLink,
  Badge,
} from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import * as cartActions from "../../redux/actions/cartActions";
import * as constants from "../../redux/actions/constants";
import { TiShoppingCart} from "react-icons/ti";
import "./Cart.css"


const Cart = () => {
  const cart = useSelector((state) => state.cartReducer);
  const dispatch = useDispatch();

  const removeFromCart = product => {
    dispatch(cartActions.removeFromCart(product));
  }
  
  const renderEmpty = () => {
    return (
      <NavItem>
        <NavLink className="cart-icon"><TiShoppingCart/></NavLink>
      </NavItem>
    );
  }

  const buyTheCart = () => {
    for (const cartItem of cart) {
      dispatch({type: constants.BUY_THE_CART_REQUESTED, payload: cartItem})
    }
  }
  const renderSummary = () => {
    return (
      <UncontrolledDropdown nav inNavbar>
        <DropdownToggle nav caret className="cart-icon text-white">
          <TiShoppingCart/>
        </DropdownToggle>
        <DropdownMenu right className="cart">
          {cart.map((cartItem) => (
            <DropdownItem key={cartItem.product.id}>
              <Badge
                color="danger"
                onClick={() => removeFromCart(cartItem.product)}
              >
                X
              </Badge>
              {cartItem.product.productName}
              <Badge color="info">{cartItem.quantity}</Badge>
            </DropdownItem>
          ))}

          <DropdownItem divider />
          <DropdownItem className="buy-btn" onClick={() => buyTheCart()}>
            buy the cart
          </DropdownItem>
        </DropdownMenu>
      </UncontrolledDropdown>
    );
  }

  return <div>{cart.length > 0 ? renderSummary() : renderEmpty()}</div>
};

export default Cart;