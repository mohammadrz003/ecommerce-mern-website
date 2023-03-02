import { createSlice } from "@reduxjs/toolkit";

// USER LOGIN SLICE
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

const orderCreateActions = orderCreateSlice.actions;
const orderCreateReducer = orderCreateSlice.reducer;

export { orderCreateActions, orderCreateReducer };
