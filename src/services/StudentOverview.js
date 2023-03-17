import axios from 'axios';
const baseURL = 'http://localhost:8000/student';
const fetchData = () => {
  const token = localStorage.getItem('token');
  return axios
    .get(baseURL, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    .then((res) => {
      console.log(res.data);
      return res.data.data;
    })
    .catch((error) => {
      console.log(error);
      return [];
    });
};
export default fetchData;
