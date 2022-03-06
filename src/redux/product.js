import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  datas: [],
  filteredProducts: [],
  sizes: ["Regular", "Medium", "Large"],
  toppings: [
    "Red Pepper",
    "Onion",
    "Grilled Mushroom",
    "Extra Cheese",
    "Black Olive",
  ],
};

export const productSlice = createSlice({
  name: "Product",
  initialState,
  reducers: {
    setDatas: (state, action) => {
      state.datas = action.payload;
      state.filteredProducts = action.payload;
    },
    filterProductByType: (state, action) => {
      if (action.payload === "all") {
        state.filteredProducts = state.datas;
      }
      if (action.payload === "veg") {
        state.filteredProducts = state.datas.filter((item) => item.isVeg);
      }
      if (action.payload === "nonveg") {
        state.filteredProducts = state.datas.filter((item) => !item.isVeg);
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  setDatas,
  filterProductByType,
  sortProductByPrize,
  sortProductByRating,
} = productSlice.actions;

export default productSlice.reducer;
