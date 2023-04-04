import axios from './axios';
const booksBase = '/book/register';

export async function createBook(book) {
  try {
    const response = await axios.post(booksBase, book);
    return response;
  } catch (error) {
    console.log(error);
    return error.response;
  }
}
