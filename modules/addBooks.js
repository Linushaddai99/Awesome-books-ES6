import displayBook from './displayBook.js';

const addBook = (bookList) => {
  localStorage.setItem('bookList', JSON.stringify(bookList));
  displayBook(bookList[bookList.length - 1]);
};

export default addBook;