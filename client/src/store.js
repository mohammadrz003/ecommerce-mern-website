import { configureStore } from "@reduxjs/toolkit";

import {
  productListReducer,
  productDetailReducer,
} from "./reducers/productReducers";

const store = configureStore({
  reducer: {
    productList: productListReducer,
    productDetail: productDetailReducer,
  },
});

export default store;
