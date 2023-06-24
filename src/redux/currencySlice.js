import { createSlice } from '@reduxjs/toolkit';
import { exchangeOperation, fetchBaseCurrent } from './operations';

export const currencySlice = createSlice({
  name: 'currency',
  initialState: { basecurrency: '', exchangeResult: "" },
  reducers: {
    setBaseCurrency(state, action) {
      state.basecurrency = action.payload
    }
  },
  extraReducers: {
    [fetchBaseCurrent.fulfilled](state, action) {
      state.basecurrency = action.payload;
    },
    [exchangeOperation.fulfilled](state, action) {
      state.exchangeResult = action.payload;
    },
  },
});

export const { setBaseCurrency } = currencySlice.actions