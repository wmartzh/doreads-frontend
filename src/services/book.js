import axios from './axios';
const booksBase = '/book/register';

export async function getBooks(page, perPage, sortOptions) {
  try {
    const response = await axios.get(
      `${booksBase}?order=${sortOptions.order}&sort=${sortOptions.sort}&page=${
        page + 1
      }&limit=${perPage}`
    );
    return response.data;
  } catch (error) {
    return [];
  }
}
export async function createBook(book) {
  try {
    const response = await axios.post(booksBase, book);
    return response.data;
  } catch (error) {
    return [];
  }
}

export function collectBookData() {
  const book = {
    title: document.getElementById('BookTitle').value,
    author: document.getElementById('BookAuthor').value,
    isbn: document.getElementById('BookISBN').value,
    category: document.getElementById('BookCategory').innerHTML.toString(),
    year: document.getElementById('BookYear').getAttribute('value'),
    picture: document.getElementById('BookPicture').value,
    editorial: document.getElementById('BookEditorial').value,
    language: document.getElementById('BookLanguage').innerHTML.toString()
  };
  createBook(book);
  console.log(book);
}
