import axios from 'axios';

export const fetchMovies = (endpoint) => {
  return axios.request({
    method: 'get',
    url:
      `${process.env.REACT_APP_BASE_URL}` +
      endpoint +
      `${process.env.REACT_APP_API_KEY}`,
  });
};
