import axios from 'axios';

const API_URL = 'http://localhost:5000/api/users/';
// Register user
const register = async (userData) => {
  try {
    console.log('Registering user at:', API_URL);
    const response = await axios.post(API_URL, userData, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.data) {
      localStorage.setItem('user', JSON.stringify(response.data));
      console.log('Registration successful', response.data);
    }

    return response.data;
  } catch (error) {
    // Remove user from localStorage on error
    console.error('Registration error:', error.response || error);
    localStorage.removeItem('user');
    throw error; // This will trigger the rejected case in your authSlice
  }
};

const authService = {
  register,
};

export default authService;
