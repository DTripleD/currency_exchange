import { createSlice } from '@reduxjs/toolkit';
import { fetchBaseCurrent } from './operations';

export const currencySlice = createSlice({
  name: 'currency',
  initialState: { basecurrency: '' },
  extraReducers: {
    [fetchBaseCurrent.fulfilled](state, action) {
      state.basecurrency = action.payload;
    },
  },
});
