import { createSlice } from "@reduxjs/toolkit";

// USER LOGIN SLICE
const userLoginInitialState = {};

const userLoginSlice = createSlice({
  name: "userLogin",
  initialState: userLoginInitialState,
  reducers: {
    userLoginRequest(state, action) {
      return { loading: true };
    },
    userLoginSuccess(state, action) {
      return { loading: false, userInfo: action.payload };
    },
    userLoginFail(state, action) {
      return { loading: false, error: action.payload };
    },
    userLogout(state, action) {
      return {};
    },
  },
});

// USER REGISTER SLICE
const userRegisterInitialState = {};

const userRegisterSlice = createSlice({
  name: "userRegister",
  initialState: userRegisterInitialState,
  reducers: {
    userRegisterRequest(state, action) {
      return { loading: true };
    },
    userRegisterSuccess(state, action) {
      return { loading: false, userInfo: action.payload };
    },
    userRegisterFail(state, action) {
      return { loading: false, error: action.payload };
    },
  },
});

const userLoginActions = userLoginSlice.actions;
const userLoginReducer = userLoginSlice.reducer;
const userRegisterActions = userRegisterSlice.actions;
const userRegisterReducer = userRegisterSlice.reducer;

export {
  userLoginActions,
  userLoginReducer,
  userRegisterActions,
  userRegisterReducer,
};
