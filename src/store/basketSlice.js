import {createSlice} from '@reduxjs/toolkit';

export const basketSlice = createSlice({
  name: 'basket',
  initialState: [],
  reducers: {
    addProductToBasket: (state, action) => {
      return [...state, action.payload];
    },
    deleteProductFromBasket: (state, action) => {
      let newArray = state;
      return newArray.filter((item) => item !== action.payload);
    },
  },
});

export default basketSlice.reducer;
const addProductToBasket = basketSlice.actions.addProductToBasket;
const deleteProductFromBasket = basketSlice.actions.deleteProductFrom;

export {addProductToBasket, deleteProductFromBasket};
