import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
};

const countSlice = createSlice({
  name: "count",
  initialState,
  reducers: {
    add: function (state) {
      state.count += 1;
    },
    sub: function (state) {
      state.count -= 1;
    },
  },
});

export const { add, sub } = countSlice.actions;

export default countSlice.reducer;
