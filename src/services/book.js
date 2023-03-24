import axios from "./axios";
const booksBase = "/book";

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