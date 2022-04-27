import { createSlice } from '@reduxjs/toolkit'
import { AuthSlice } from '../types';

const initialState: AuthSlice = {
  user: {},
  isLoading: false,
  token: null,
  error: '',
}

export const authSlice = createSlice({
  name: 'counter',
  initialState,
  
  reducers: {
    authLogin: (state) => { 
      state.isLoading = true;
    },
    authLoginSucceded: (state, action: any) => {
      const { payload } = action;
      state.isLoading = false;
      state.token = payload;
    },
    authLoginFailed: (state, action: any) => {
      const { payload } = action;
      state.isLoading = false;
      state.error = payload;
    },
    authLogoutSucceded: (state) => {
      state.token = null;
    },
    authLoadUserSucceded: (state, action) => {
      const { payload } = action;
      state.user = payload;
    },
    authLoadUserFailed: (state) => {
      state.user = {}
    },
  },
})

export const { authLogin, authLoginSucceded, authLoginFailed, authLogoutSucceded, authLoadUserSucceded, authLoadUserFailed } = authSlice.actions

export default authSlice.reducer