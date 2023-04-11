import axios from 'axios';

const instance = axios.create({
  baseURL: process.env.REACT_APP_API_HOST
});

instance.interceptors.request.use(
  function (config) {
    const token = localStorage.getItem('accessToken');
    config.headers.Authorization = `Bearer ${token}`;
    config.headers.Accept = 'application/json';

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (response) => response,
  async function (error) {
    const originalRequest = error.config;
    const { status } = error.response;

    const refreshToken = localStorage.getItem('refreshToken');
    if (status === 401) {
      originalRequest._retry = false;
      localStorage.removeItem('accessToken');
      window.location.reload();
    }
    if (status === 403 && !originalRequest._retry) {
      originalRequest._retry = true;

      const response = await instance.post('/auth/refresh-token', { refreshToken });
      localStorage.setItem('accessToken', response.data.accessToken);
      localStorage.setItem('refreshToken', response.data.refreshToken);

      axios.defaults.headers['Authorization'] = 'Bearer ' + response.data.accessToken;
      return axios(originalRequest);
    }

    return Promise.reject(error);
  }
);

export default instance;
