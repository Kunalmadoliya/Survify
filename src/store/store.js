import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./actions/authSlice";
import bookingReducer from "./actions/bookingSlice";
import occupationSlice from "./actions/occupationSlice";

const store = configureStore({
  reducer: {
    auth: authSlice,
    bookings: bookingReducer,
    occupations: occupationSlice,
  },
});

export default store;
