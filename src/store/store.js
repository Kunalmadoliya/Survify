import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./actions/authSlice";
import bookingSlice from "./actions/bookingSlice";
import occupationSlice from "./actions/occupationSlice";

const store = configureStore({
  reducer: {
    auth: authSlice,
    bookings: bookingSlice,
    occupations: occupationSlice,
  },
});

export default store;
