import { createSlice, current } from "@reduxjs/toolkit";

const initialState = {
  songs: [],
  playingSong: {
    idSongPlaying: null,
    isPause: null, // null: not play yet, false: is playing, true: is pause
  },
};

const songSlice = createSlice({
  name: 'song',
  initialState,
  reducers: {
    saveSong: (state, action) => {
      state.songs = action.payload;
    },
    setSongPlaying: (state, action) => {
      state.playingSong.idSongPlaying = action.payload;
    },
    changePauseSong: (state, action) => {
      state.playingSong.isPause = action.payload;
    }
  },
});

const { actions, reducer } = songSlice;
export const { saveSong, setSongPlaying, changePauseSong } = actions;
export default reducer;

