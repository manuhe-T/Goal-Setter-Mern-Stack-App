import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import goalService from '../utils/goalService';

const initialState = {
  goals: [],
  isLoading: false,
  isError: false,
  isSuccess: false,
  message: '',
};

export const createGoal = createAsyncThunk(
  'goals/createGoal',
  async (goalData, thunkAPI) => {
    try {
      console.log('Creating goal with data:', goalData); // Debug log
      const { auth } = thunkAPI.getState();
      const token = auth.user?.token; // Safely access token

      if (!token) {
        throw new Error('No token found! Please log in again.');
      }
      console.log('Token:', token); // Debug log

      if (!token) {
        throw new Error('No authentication token found');
      }

      const response = await goalService.createGoal(goalData, token);
      console.log('Response:', response); // Debug log
      return response;
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

const goalSlice = createSlice({
  name: 'goal',
  initialState,
  reducers: {
    reset: () => initialState,
  },
  extraReducers: (builder) => {
    builder.addCase(createGoal.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(createGoal.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.goals.push(action.payload);
    });
    builder.addCase(createGoal.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.message = action.payload;
    });
  },
});

export const { reset } = goalSlice.actions;
export default goalSlice.reducer;
