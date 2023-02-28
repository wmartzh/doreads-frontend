const axios = require('axios');
const axiosApiInstance = axios.create();

const refreshAccessToken = async () => {
  console.log('refreshing token');
  return 'WIP';
};

axiosApiInstance.interceptors.request.use(
  async (config) => {
    const value = await localStorage.getItem('userToken');
    const keys = JSON.parse(value);
    config.headers = {
      Authorization: `Bearer ${keys.accessToken}`,
      Accept: 'application/json',
      'Content-Type': 'application/x-www-form-urlencoded'
    };
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);
axiosApiInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  async function (error) {
    const originalRequest = error.config;
    if (error.response.status === 403 && !originalRequest._retry) {
      originalRequest._retry = true;
      const accessToken = await refreshAccessToken();
      axios.defaults.headers.common['Authorization'] = 'Bearer ' + accessToken;
      return axiosApiInstance(originalRequest);
    }
    return Promise.reject(error);
  }
);
export default axiosApiInstance;
