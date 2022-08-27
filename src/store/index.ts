import {configureStore} from '@reduxjs/toolkit';
import muffinReducer from './muffinSlice';
import productReducer from './productSlices';


const store = configureStore({
  reducer: {
    muffin: muffinReducer,
    ecom: productReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export default store;
