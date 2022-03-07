import React, { useEffect } from "react";
import { toast } from "react-toastify";
import store from "store";

import "../styles/CartScreen.css";
import CartCard from "../components/CartCard";

import { useSelector, useDispatch } from "react-redux";
import { clearCart, getLocalData } from "../redux/cart";

const storeKey = "PizzaReady-key";

const CartScreen = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);

  // LocalStorage section
  useEffect(() => {
    if (typeof store.get(storeKey) !== undefined) {
      dispatch(getLocalData(store.get(storeKey).data));
    }
  }, [dispatch]);

  useEffect(() => {
    store.set(storeKey, { data: cartItems });
  }, [cartItems]);

  let totalPrice = 0;
  for (let i in cartItems) {
    totalPrice += cartItems[i].pprice * cartItems[i].pquantity;
  }

  return (
    <div className="cart-conatiner">
      <div className="cart-heading">Cart Items</div>
      {cartItems.map((item, index) => (
        <CartCard item={item} key={index} />
      ))}
      <div className="buy-wrapper">
        <span>{cartItems.length === 0 ? " " : `Total :₹ ${totalPrice} `}</span>
        <span
          className="buy-btn"
          onClick={() => {
            dispatch(clearCart());
            toast("Order Placed Successfully", { type: "success" });
          }}
        >
          {cartItems.length === 0 ? " " : "Buy Now"}
        </span>
      </div>
    </div>
  );
};

export default CartScreen;
