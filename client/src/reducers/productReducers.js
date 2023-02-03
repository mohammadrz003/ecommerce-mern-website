import { createSlice } from "@reduxjs/toolkit";

// PRODUCT LIST SLICE
const productListInitialState = { products: [] };

const productListSlice = createSlice({
  name: "productList",
  initialState: productListInitialState,
  reducers: {
    productListRequest() {
      return { loading: true, products: [] };
    },
    productListSuccess(state, action) {
      return { loading: false, products: action.payload };
    },
    productListFail(state, action) {
      return { loading: false, error: action.payload };
    },
  },
});

export const productListActions = productListSlice.actions;
const productListReducer = productListSlice.reducer;

// PRODUCT DETAIL SLICE
const productDetailInitialState = {
  product: { reviews: [] },
};

const productDetailsSlice = createSlice({
  name: "productDetail",
  initialState: productDetailInitialState,
  reducers: {
    productDetailsRequest(state) {
      return { loading: true, ...state };
    },
    productDetailsSuccess(state, action) {
      return { loading: false, product: action.payload };
    },
    productDetailsFail(state, action) {
      return { loading: false, error: action.payload };
    },
  },
});

export const productDetailsActions = productDetailsSlice.actions;
const productDetailReducer = productDetailsSlice.reducer;

export { productListReducer, productDetailReducer };
