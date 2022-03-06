import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  singleItem: {
    pid: "",
    pname: "",
    psize: "",
    ptoppings: "",
    pquantity: 1,
  },
};

export const cartSlice = createSlice({
  name: "Cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.cartItems.push(state.singleItem);
    },
    setSingleItem: (state, action) => {
      state.singleItem.pid = action.payload.pid;
      state.singleItem.pname = action.payload.pname;
      state.singleItem.psize = action.payload.psize;
      state.singleItem.pquantity = action.payload.pquantity;
    },
    setToppings: (state, action) => {
      state.singleItem.ptoppings = action.payload;
    },
    removeFromCart: (state, action) => {
      const newCartItems = state.cartItems.filter(
        (item) => item.pid !== action.payload
      );
      state.cartItems = newCartItems;
    },
    clearCart: (state, action) => {
      state.cartItems = [];
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  addToCart,
  setSingleItem,
  setToppings,
  removeFromCart,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;
