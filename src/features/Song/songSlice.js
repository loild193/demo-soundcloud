import { createSlice, current } from "@reduxjs/toolkit";

const removeDuplicateValue = (array) => {
  return array.filter(
    (v, i, a) => a.findIndex(t => (t.id === v.id)) === i
  )
}

const initialState = {
  songs: [],
  next_href: null,
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
      state.songs = removeDuplicateValue([...state.songs, ...action.payload.collection]);
      state.next_href = action.payload.next_href;
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

