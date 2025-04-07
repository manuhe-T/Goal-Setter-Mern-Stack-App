import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL + 'api/goals/';

// Create new Goal
const createGoal = async (goalData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`, // Must be "Bearer <token>"
    },
  };

  const response = await axios.post(API_URL, goalData, config);
  return response.data;
};

const goalService = {
  createGoal,
};

export default goalService;
