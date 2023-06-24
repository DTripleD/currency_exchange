import { createAsyncThunk } from '@reduxjs/toolkit';

import { exchangeCurrency, getCurrentPossition } from '../services/service';

export const fetchBaseCurrent = createAsyncThunk(
  'currency/fetchAll',
  async (crt, thunkAPI) => {

    const state = thunkAPI.getState();
    const persistedBaseCerrency = state.basecurrency;
    console.log(persistedBaseCerrency)
    if (persistedBaseCerrency) {
      return thunkAPI.rejectWithValue('Unable to fetch');
    }

    try {
      const response = await getCurrentPossition(crt);

      return response.results[0].annotations.currency.iso_code;
    }
    catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const exchangeOperation = createAsyncThunk(
  'currency/exchange',
  async (values, thunkAPI) => {

    try {
      const { result } = await exchangeCurrency(values);
      return result;
    }
    catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);