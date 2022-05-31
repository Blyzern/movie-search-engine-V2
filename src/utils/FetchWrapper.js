import axios from 'axios';

export function fetchWrapper(endpoint, method) {
  
  return axios.request({
    method: method,
    url: (`${process.env.REACT_APP_API_URL}` + endpoint)
  })
};
