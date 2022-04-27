import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface IAuthState {
  user: IUser,
}

export interface IUser {
  username?: string,
  name?: string
  token?: string,
}

const initialState: IAuthState = {
  user: {},
}

export const authSlice = createSlice({
  name: 'counter',
  initialState,
  
  reducers: {
    increment: (state) => {
    },
    decrement: (state) => {
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
    },
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = authSlice.actions

export default authSlice.reducer