import axios from 'axios';
const baseURL = `${process.env.REACT_APP_API_HOST}/student`;
const fetchData = (page) => {
  const token = localStorage.getItem('token');
  return axios
    .get(`${baseURL}?page=${page + 1}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    .then((res) => {
      console.log(res.data);
      return res.data;
    })
    .catch((error) => {
      console.log(error);
      return [];
    });
};
export default fetchData;
