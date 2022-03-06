import React from "react";
import "../styles/CartScreen.css";
import { useSelector, useDispatch } from "react-redux";
import { clearCart } from "../redux/cart";
import CartCard from "../components/CartCard";

const CartScreen = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);
  // console.log(cartItems);
  return (
    <div className="cart-conatiner">
      <div className="cart-heading">Cart Items</div>
      {cartItems.map((item, index) => (
        <CartCard item={item} key={index} />
      ))}
      <div className="buy-wrapper">
        <span
          style={{ cursor: "pointer" }}
          onClick={() => dispatch(clearCart())}
        >
          {cartItems.length === 0 ? " " : "Buy Now"}
        </span>
      </div>
    </div>
  );
};

export default CartScreen;
