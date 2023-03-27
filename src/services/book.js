import axios from './axios';
const booksBase = '/book/register';

export async function createBook(book) {
  try {
    const response = await axios.post(booksBase, book);
    return response.data;
  } catch (error) {
    return [];
  }
}

const ValidateBook = (book) => {
  return Object.values(book).every((value) => {
    if (value === '' || value === null || value === undefined) {
      return false;
    }
    return true;
  });
};

export async function collectBookData(method) {
  try {
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
    if (ValidateBook(book)) {
      try {
        await createBook(book);
        method({ isOpen: true, message: 'Book created successfully', severity: 'success' });
      } catch (error) {
        throw new Error('Error Creating Book');
      }
    } else {
      throw new Error('Missing Fields');
    }
  } catch (error) {
    if (error.message === 'Missing Fields') {
      method({ isOpen: true, message: 'Missing Fields', severity: 'error' });
    } else {
      method({ isOpen: true, message: 'Error Creating Book', severity: 'error' });
    }
  }
}
