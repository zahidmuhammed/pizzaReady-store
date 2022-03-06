import React from "react";

import { useSelector, useDispatch } from "react-redux";
import { clearCart } from "../redux/cart";

import CartCard from "../components/CartCard";

const CartScreen = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);

  return (
    <div
      className="cart-conatiner"
      style={{
        backgroundColor: "#4e60ff",
        borderRadius: "10px",
        padding: "8px",
      }}
    >
      <div style={{ textAlign: "center", fontWeight: "bold", color: "white" }}>
        Cart Items
      </div>
      {cartItems.map((item, index) => (
        <CartCard item={item} key={index} />
      ))}
      <div style={{ textAlign: "center", fontWeight: "bold", color: "white" }}>
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
