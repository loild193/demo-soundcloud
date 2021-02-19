import { createSlice } from "@reduxjs/toolkit";

const removeDuplicateValue = (array) => {
  return array.filter(
    (v, i, a) => a.findIndex(t => (t.id === v.id)) === i
  )
}

const initialPlaylist = JSON.parse(localStorage.getItem('playlist'));

const initialState = {
  songs: [],
  next_href: null,
  playingSong: {
    idSongPlaying: null,
    isPause: null, // null: not play yet, false: is playing, true: is pause
  },
  isContinuedSearchSong: null,
  playlist: initialPlaylist !== null ? initialPlaylist : [],
  isPlayList: false,
};

const songSlice = createSlice({
  name: 'song',
  initialState,
  reducers: {
    saveSong: (state, action) => {
      if (state.isContinuedSearchSong === false) {
        state.songs = action.payload.collection;
      }
      else {
        state.songs = removeDuplicateValue([...state.songs, ...action.payload.collection]);
      }
      state.next_href = action.payload.next_href;
    },

    setSongPlaying: (state, action) => {
      state.playingSong.idSongPlaying = action.payload;
    },
    changePauseSong: (state, action) => {
      state.playingSong.isPause = action.payload;
    },

    changeIsContinuedSearchSong: (state, action) => {
      state.isContinuedSearchSong = action.payload;
    },

    addToPlayList: (state, action) => {
      state.playlist.push(action.payload);
      localStorage.setItem('playlist', JSON.stringify(state.playlist));
    },
    removeFromPlaylist: (state, action) => {
      state.playlist = state.playlist.filter(track => track.id !== action.payload.id);
      localStorage.setItem('playlist', JSON.stringify(state.playlist));
    },
    changeIsPlaylist: (state, action) => {
      state.isPlayList = action.payload;
    },
  },
});

const { actions, reducer } = songSlice;
export const { 
  saveSong, 
  setSongPlaying, changePauseSong, 
  changeIsContinuedSearchSong,
  addToPlayList, removeFromPlaylist, changeIsPlaylist,
} = actions;
export default reducer;

