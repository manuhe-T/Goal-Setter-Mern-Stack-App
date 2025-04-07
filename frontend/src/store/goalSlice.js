import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  goals: [],
  isLoading: false,
  isError: false,
  isSuccess: false,
  message: '',
};

const goalSlice = createSlice({
  name: 'goal',
  initialState,
  reducers: {
    reset: () => initialState,
  },
  extraReducers: () => {},
});

export const { reset } = goalSlice.actions;
export default goalSlice.reducer;
