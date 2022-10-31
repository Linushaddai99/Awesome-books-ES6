import { displayBook } from "./displayBook.js";

export const addBook = (bookList) => {
    console.log('a new book added')
    localStorage.setItem('bookList', JSON.stringify(bookList));
    displayBook(bookList[bookList.length - 1])
}