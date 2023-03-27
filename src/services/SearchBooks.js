import axios from './axios';
const BooksBase = '/book';

export async function getBooks(page, perPage, search, sort) {
  try {
    const response = await axios.get(
      `${BooksBase}?limit=${perPage}&page=${page}&search=${search}&sort=${sort.sort}`
    );
    return response.data;
  } catch (error) {
    if (error.response) {
      return { error: error.response };
    }
  }
}
