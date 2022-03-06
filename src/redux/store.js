import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./product";
import cartReducer from "./cart";

export const store = configureStore({
  reducer: {
    products: productReducer,
    cart: cartReducer,
  },
});
