import axios from 'axios';

export function fetchMovies(endpoint, method) {
  
  return axios.request({
    method,
    url: (`${process.env.REACT_APP_BASE_URL}` + endpoint + `${process.env.REACT_APP_API_KEY}`)
  })
};
