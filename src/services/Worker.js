import axios from './axios.js';
const Worker = '/auth/register';

export async function createWorker(work) {
  try {
    const response = await axios.post(Worker, work);
    return response;
  } catch (error) {
    console.log(error);
    return { error: error.response };
  }
}
