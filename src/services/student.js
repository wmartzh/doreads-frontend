import axios from './axios';
const studentsBase = '/student';

export async function getStudents(page, perPage) {
  try {
    const response = await axios.get(`${studentsBase}?page=${page || 1}&limit=${perPage}`);
    return response.data;
  } catch (error) {
    return [];
  }
}
