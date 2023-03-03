import { createSlice } from "@reduxjs/toolkit";

// ORDER CREATE SLICE
const orderCreateInitialState = {};

const orderCreateSlice = createSlice({
  name: "orderCreate",
  initialState: orderCreateInitialState,
  reducers: {
    orderCreateRequest(state, action) {
      return { loading: true };
    },
    orderCreateSuccess(state, action) {
      return { loading: false, success: true, order: action.payload };
    },
    orderCreateFail(state, action) {
      return { loading: false, error: action.payload };
    },
  },
});

// ORDER DETAILS SLICE
const orderDetailsInitialState = {
  loading: true,
  orderItems: [],
  shippingAddress: {},
};

const orderDetailsSlice = createSlice({
  name: "orderDetails",
  initialState: orderDetailsInitialState,
  reducers: {
    orderDetailsRequest(state, action) {
      return { ...state, loading: true };
    },
    orderDetailsSuccess(state, action) {
      return { loading: false, order: action.payload };
    },
    orderDetailsFail(state, action) {
      return { loading: false, error: action.payload };
    },
  },
});

const orderCreateActions = orderCreateSlice.actions;
const orderCreateReducer = orderCreateSlice.reducer;
const orderDetailsActions = orderDetailsSlice.actions;
const orderDetailsReducer = orderDetailsSlice.reducer;

export {
  orderCreateActions,
  orderCreateReducer,
  orderDetailsActions,
  orderDetailsReducer,
};
