import axios from './axios';
const booksBase = '/book';

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
  console.log('collecting data');
  console.log('ISBN: ', document.getElementById('BookISBN').value);
  console.log('Title: ', document.getElementById('BookTitle').value);
  console.log('Author: ', document.getElementById('BookAuthor').value);
  console.log('Picture: ', document.getElementById('BookPicture').value);
  console.log('Editorial: ', document.getElementById('BookEditorial').value);
  console.log('Year: ', document.getElementById('BookYear').getAttribute('value'));
  console.log('Category: ', document.getElementById('BookCategory').innerHTML.toString());
  console.log('Language: ', document.getElementById('BookLanguage').innerHTML.toString());
  // const book = {
  //   title: document.getElementById('BookTitle').value,
  //   author: document.getElementById('BookAuthor').value,
  //   isbn: document.getElementById('BookISBN').value,
  //   category: document.getElementById('BookCategory').value,
  //   year: document.getElementById('BookYear').value,
  //   picture: document.getElementById('BookPicture').value,
  //   editorial: document.getElementById('BookEditorial').value,
  //   language: document.getElementById('BookLanguage').value
  // };
  // console.log(book);
}
