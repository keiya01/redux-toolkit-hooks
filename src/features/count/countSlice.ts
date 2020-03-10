import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type CountState = number;
export const initialCountState: CountState = 0;

const countSlice = createSlice({
  name: 'count',
  initialState: initialCountState,
  reducers: {
    increment: (state, action: PayloadAction<number>) => state + action.payload,
    decrement: (state) => state - 1
  }
});

export const { increment, decrement } = countSlice.actions;

export type CountAction = ReturnType<typeof increment> | ReturnType<typeof decrement>;

export default countSlice.reducer;
