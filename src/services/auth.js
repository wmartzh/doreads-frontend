import axios from './axios.js';
export async function authenticate(userdata) {
  try {
    const response = await axios.post('/auth/login', userdata);
    localStorage.setItem('token', response.data.accessToken);
    return response;
  } catch (error) {
    return { error: error.response };
  }
}
