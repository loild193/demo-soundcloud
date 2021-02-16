import { configureStore } from '@reduxjs/toolkit';
import songReducer from '../features/Song/songSlice';

const rootReducer = {
  songs: songReducer,
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;