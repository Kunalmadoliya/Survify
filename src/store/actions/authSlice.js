import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  status: false, // ✅ boolean
  userData: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.status = true; // ✅ boolean, not string
      state.userData = action.payload.userData;
    },
    logout: (state) => {
      state.status = false; // ✅ boolean
      state.userData = null;
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
