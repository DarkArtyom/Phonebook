import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

//Utility to add JWT
const setAuthHeader = token => {
  axios.defaults.headers.common.Autorization = `Bearer ${token}`;
};

// Utility to remove JWT

const removeAuthHeader = () => {
  axios.defaults.headers.common.Autorization = '';
};

export const register = createAsyncThunk(
  'auth/register',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await axios.post('/users/singup', credentials);
      setAuthHeader(data.token);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
