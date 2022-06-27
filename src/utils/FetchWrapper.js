import axios from 'axios';

export const fetchMovies = async (endpoint) => {
  try {
    return axios.get(
      `${process.env.REACT_APP_BASE_URL}` +
        endpoint +
        `${process.env.REACT_APP_API_KEY}`
    );
  } catch (error) {}
};
