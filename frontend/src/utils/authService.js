import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL + 'api/users/';

// Register user
const register = async (userData) => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    const response = await axios.post(API_URL, userData, config);

    if (response.data) {
      localStorage.setItem('user', JSON.stringify(response.data));
      console.log('Registration successful', response.data);
    }

    return response.data;
  } catch (error) {
    console.error('Registration error:', error.response || error);
    localStorage.removeItem('user');
    throw error;
  }
};

// Login user
const login = async (userData) => {
  try {
    const response = await axios.post(API_URL + 'login', userData, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.data) {
      localStorage.setItem('user', JSON.stringify(response.data));
      console.log('Login successful', response.data);
    }

    return response.data;
  } catch (error) {
    console.error('Logging error:', error.response || error);
    localStorage.removeItem('user');
    throw error;
  }
};

// Logout user
const logout = () => {
  localStorage.removeItem('user');
};

const authService = {
  register,
  logout,
  login,
};

export default authService;
