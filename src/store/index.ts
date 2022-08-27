import {configureStore} from '@reduxjs/toolkit';
import productReducer from './productSlices';
import basketReducer from './basketSlice';

const store = configureStore({
  reducer: {
    ecom: productReducer,
    basket: basketReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export default store;
