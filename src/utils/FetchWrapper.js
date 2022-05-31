import axios from 'axios';

export function fetchWrapper(endpoint, method) {
  const headers = { 'Content-Type': 'application/json' };

  const config = {
    method,
    headers: {
      ...headers,
    },
  };
  return axios.request({
    method: config,
    url: (`${process.env.REACT_APP_API_URL}${endpoint}`)
  })
};
