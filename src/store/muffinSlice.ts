import {createSlice} from '@reduxjs/toolkit';

export const muffinSlice = createSlice({
  name: 'muffin',
  initialState: [],
  reducers: {
    addMuffin: (state, action): any => {
      return [...state, action.payload];
    },
    deleteMuffin: (state, action) => {
      let newMuffinArray = state;
      return newMuffinArray.filter((muffin) => muffin !== action.payload);
    },
  },
});

export default muffinSlice.reducer;
const addMuffin = muffinSlice.actions.addMuffin;
const deleteMuffin = muffinSlice.actions.deleteMuffin;
export {addMuffin, deleteMuffin};
