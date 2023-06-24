import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { getCurrentPossition } from '../services/service';

export const fetchBaseCurrent = createAsyncThunk(
  'currency/fetchAll',
  async (crt, thunkAPI) => {
    const response = await getCurrentPossition(crt);
    console.log(response.results[0].annotations.currency.iso_code);
    return response.results[0].annotations.currency.iso_code;
  }
);
