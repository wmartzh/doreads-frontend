import axios from './axios';
const BooksBase = '/book';

export async function getBooks() {
  try {
    const response = await axios.get(`${BooksBase}`);
    return response.data;
  } catch (error) {
    if (error.response) {
      return { error: error.response };
    }
  }
}
