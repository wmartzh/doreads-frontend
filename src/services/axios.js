import axios from 'axios';

const instance = axios.create({
  // eslint-disable-next-line no-undef
  baseURL: process.env.REACT_APP_API_HOST
});

instance.interceptors.request.use(function (config) {
  const token = localStorage.getItem('token');
  config.headers.Authorization = token;

  return config;
});

export default instance;
