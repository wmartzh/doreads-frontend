import axios from './axios';
const studentsBase = '/student';

export async function getStudents(page, perPage, sortOptions) {
  try {
    const response = await axios.get(
      `${studentsBase}?order=${sortOptions.order}&sort=${sortOptions.sort}&page=${
        page + 1
      }&limit=${perPage}`
    );
    return response.data;
  } catch (error) {
    return [];
  }
}
