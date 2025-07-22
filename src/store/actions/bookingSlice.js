import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  bookings: [],
};

const bookingSlice = createSlice({
  name: "bookings",
  initialState,
  reducers: {
    setBookings: (state, actions) => {
      state.bookings = actions.payload;
    },
    addBookings: (state, actions) => {
      state.bookings.push(actions.payload);
    },
    updateBookingsStatus: (state, action) => {
      const {id, status} = action.payload;
      const booking = state.bookings.find((b) => b.$id === id);
      if (booking) {
        booking.status = status;
      }
    },
    removeBookings: (state, actions) => {
      state.bookings = state.bookings.filter((b) => b.$id !== actions.payload);
    },
  },
});

export const {setBookings, addBookings, updateBookingsStatus, removeBookings} =
  bookingSlice.actions;
export default bookingSlice.reducer;
