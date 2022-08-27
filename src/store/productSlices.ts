import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';

import {getProducts, getProductTiming} from '../services/productApi';

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

interface IProduct {
  products: Resource<any>;
  productTimings: Resource<any>;
}

const initialState: IProduct = {
  products: emptyResource(),
  productTimings: emptyResource(),
};

const getProductsAT = createAsyncThunk('ecom/products', async (_, thunkAPI) => {
  try {
    const response = await getProducts();
    if (response) {
      return response;
    } else {
      return thunkAPI.rejectWithValue('no product data');
    }
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

const getProductsTimingAT = createAsyncThunk(
  'ecom/productTimings',
  async (_, thunkAPI) => {
    try {
      const response = await getProductTiming();
      if (response) {
        return response;
      } else {
        return thunkAPI.rejectWithValue('no product timing');
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
    // products
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
    // productTimings
    builder.addCase(getProductsTimingAT.pending, (state, _) => {
      state.productTimings.pending = true;
      state.productTimings.data = null;
      state.productTimings.err = null;
    });
    builder.addCase(getProductsTimingAT.fulfilled, (state, action) => {
      state.productTimings.data = action.payload;
      state.productTimings.err = null;
      state.productTimings.pending = false;
    });
    builder.addCase(getProductsTimingAT.rejected, (state, action) => {
      state.productTimings.err = action.error.message;
      state.productTimings.data = null;
      state.productTimings.pending = false;
    });
  },
});

export const userActions = {
  // ...userSlice.actions,
  getProductsAT,
  getProductsTimingAT,
};

export const productsSelectors = {
  products: (state: any) => state.ecom.products,
  productTimings: (state: any) => state.ecom.productTimings,
};

export default productsSlice.reducer;
