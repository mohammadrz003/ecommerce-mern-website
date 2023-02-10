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

export const userLoginActions = userLoginSlice.actions;
const userLoginReducer = userLoginSlice.reducer;

export { userLoginReducer };
