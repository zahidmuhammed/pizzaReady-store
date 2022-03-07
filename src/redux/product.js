import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  datas: [],
  filteredProducts: [],
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
    sortProductByPrize: (state, action) => {
      if (action.payload === "ascending") {
        state.filteredProducts.sort((a, b) => (a.price > b.price ? 1 : -1));
      }
      if (action.payload === "descending") {
        state.filteredProducts.sort((a, b) => (a.price < b.price ? 1 : -1));
      }
    },
    sortProductByRating: (state, action) => {
      if (action.payload === "ascending") {
        state.filteredProducts.sort((a, b) => (a.rating > b.rating ? 1 : -1));
      }
      if (action.payload === "descending") {
        state.filteredProducts.sort((a, b) => (a.rating < b.rating ? 1 : -1));
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
