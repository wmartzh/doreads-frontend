import axios from './axios';
const BooksBase = '/book';

export async function getBooks(page, perPage, search, category, year, lenguage) {
  try {
    const response = await axios.get(
      `${BooksBase}?limit=${perPage}&page=${page}&search=${search}&category=${category}^&year=${year}&lenguage=${lenguage}`
    );
    return response.data;
  } catch (error) {
    if (error.response) {
      return { error: error.response };
    }
  }
}
