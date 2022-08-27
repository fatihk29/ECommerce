import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';

import {getProducts} from '../services/productApi';

export interface Resource<T> {
  data: T | null | undefined;
  pending: boolean | null;
  err: string | null | undefined;
}

export function emptyResource<T>() {
  const resource: Resource<T> = {
    data: null,
    pending: null,
    err: null,
  };
  return resource;
}

interface CowState {
  products: Resource<any>;
}

// Define the initial state using that type
const initialState: CowState = {
  products: emptyResource(),
};

const getProductsAT = createAsyncThunk(
  'ecom/products',

  async (_, thunkAPI) => {
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

export const productsSlice = createSlice({
  name: 'ecom',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getProductsAT.pending, (state, _) => {
      state.products.pending = true;
      state.products.data = null;
      state.products.err = null;
    });
    builder.addCase(getProductsAT.fulfilled, (state, action) => {
      state.products.data = action.payload;
      state.products.err = null;
      state.products.pending = false;
    });
    builder.addCase(getProductsAT.rejected, (state, action) => {
      state.products.err = action.error.message;
      state.products.data = null;
      state.products.pending = false;
    });
  },
});

export const userActions = {
  // ...userSlice.actions,
  getProductsAT,
};

export const productsSelectors = {
  products: (state: any) => state.ecom.products,
};

export default productsSlice.reducer;
