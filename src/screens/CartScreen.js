import React, { useEffect } from "react";
import "../styles/CartScreen.css";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
import store from "store";

import { clearCart, getLocalData } from "../redux/cart";
import CartCard from "../components/CartCard";

const storeKey = "PizzaReady-key";

const CartScreen = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);

  useEffect(() => {
    if (typeof store.get(storeKey) !== undefined) {
      dispatch(getLocalData(store.get(storeKey).data));
    }
  }, []);

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
        <span>{cartItems.length === 0 ? " " : `Total : ₹${totalPrice} `}</span>
        <span
          style={{ cursor: "pointer", color: "#061737" }}
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
