import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  occupations: [],
};

const occupationsSlice = createSlice({
  name: "occupations",
  initialState,
  reducers: {
    setOccupations: (state, action) => {
      state.occupations = action.payload;
    },
  },
});

export const {setOccupations} = occupationsSlice.actions;
export default occupationsSlice.reducer;
