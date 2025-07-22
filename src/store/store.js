import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./actions/authSlice.js";
import bookingReducer from "./actions/bookingSlice.js";
import occupationReducer from "./actions/occupationSlice.js";

const store = configureStore({
  reducer: {
    auth: authReducer,
    bookings: bookingReducer,
    occupations: occupationReducer,
  },
});

export default store;
