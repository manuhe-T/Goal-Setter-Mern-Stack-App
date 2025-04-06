import { createSlice } from '@reduxjs/toolkit';

// Safely get user from localStorage
const getUserFromLocalStorage = () => {
  try {
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user) : null;
  } catch (error) {
    console.error('Error parsing user from localStorage', error);
    return null;
  }
};

const initialState = {
  user: getUserFromLocalStorage(),
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = false;
      state.message = '';
    },
  },
  extraReducers: () => {},
});

export const { reset } = authSlice.actions;
export default authSlice.reducer;
