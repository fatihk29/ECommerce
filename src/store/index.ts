import {configureStore} from '@reduxjs/toolkit';
import productReducer from './productSlices';

const store = configureStore({
  reducer: {
    ecom: productReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export default store;
