import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const songSlice = createSlice({
  name: 'song',
  initialState,
  reducers: {
    saveSong: (state, action) => {
      state = action.payload;
    },
  },
});

const { actions, reducer } = songSlice;
export const { saveSong } = actions;
export default reducer;

