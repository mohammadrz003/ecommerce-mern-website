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

// USER DETAILS SLICE
const userDetailsInitialState = { user: {} };

const userDetailsSlice = createSlice({
  name: "userDetails",
  initialState: userDetailsInitialState,
  reducers: {
    userDetailsRequest(state, action) {
      return { ...state, loading: true };
    },
    userDetailsSuccess(state, action) {
      return { loading: false, user: action.payload };
    },
    userDetailsFail(state, action) {
      return { loading: false, error: action.payload };
    },
  },
});

// USER DETAILS SLICE
const userUpdateProfileInitialState = {};

const userUpdateProfileSlice = createSlice({
  name: "userUpdateProfile",
  initialState: userUpdateProfileInitialState,
  reducers: {
    userUpdateProfileRequest(state, action) {
      return { loading: true };
    },
    userUpdateProfileSuccess(state, action) {
      return { loading: false, success: true, userInfo: action.payload };
    },
    userUpdateProfileFail(state, action) {
      return { loading: false, error: action.payload };
    },
    userUpdateProfileReset(state, action) {
      return { loading: false, error: action.payload };
    },
  },
});

const userLoginActions = userLoginSlice.actions;
const userLoginReducer = userLoginSlice.reducer;
const userRegisterActions = userRegisterSlice.actions;
const userRegisterReducer = userRegisterSlice.reducer;
const userDetailsActions = userDetailsSlice.actions;
const userDetailsReducer = userDetailsSlice.reducer;
const userUpdateProfileActions = userUpdateProfileSlice.actions;
const userUpdateProfileReducer = userUpdateProfileSlice.reducer;

export {
  userLoginActions,
  userLoginReducer,
  userRegisterActions,
  userRegisterReducer,
  userDetailsActions,
  userDetailsReducer,
  userUpdateProfileActions,
  userUpdateProfileReducer,
};
