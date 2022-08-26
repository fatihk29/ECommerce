import {configureStore} from '@reduxjs/toolkit';
import muffinReducer from './muffinSlice';

const store = configureStore({
  reducer: {
    muffin: muffinReducer,
  },
});

export default store;
