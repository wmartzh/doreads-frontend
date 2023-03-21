import axios from './axios.js';
export async function authenticate(userdata) {
  try {
    const response = await axios.post('/auth/login', userdata);
    localStorage.setItem('accessToken', response.data.accessToken);
    localStorage.setItem('refreshToken', response.data.refreshToken);
    return response;
  } catch (error) {
    console.log(error);
    return { error: error.response };
  }
}

export async function verify() {
  try {
    await axios.get('/auht/verify');
    return true;
  } catch (error) {
    return false;
  }
}

export async function getProfile() {
  try {
    const response = await axios.get('/auth/profile');
    return response.data;
  } catch (error) {
    return null;
  }
}
export async function signout() {
  try {
    await axios.get('/auth/logout');
    return true;
  } catch (error) {
    return false;
  }
}
