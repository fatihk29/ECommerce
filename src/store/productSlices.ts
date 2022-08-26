import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';

import {getProducts} from '../services/productApi';

const getProductsAT = createAsyncThunk(
  'users/userLogin',
  async ({_}: any, thunkAPI) => {
    try {
      const response = await getProducts();
      if (response) {
        return response;
      } else {
        return thunkAPI.rejectWithValue('not login');
      }
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

// export interface UserState {
//   user: Resource<IUser>;
// }

// const initialState: UserState = {
//   user: emptyResource(),
// }

// export const userSlice = createSlice({
//   name: 'user',
//   // initialState,
//   reducers: {

//   },
// })

export const userActions = {
  // ...userSlice.actions,
  getProductsAT,
};
