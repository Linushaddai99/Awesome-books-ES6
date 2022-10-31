import { deleteBook } from './deleteBook.js';
const bookContainer = document.querySelector('.book-container');

export const displayBook = (book) => {
    const newBook = document.createElement('div');
    newBook.classList.add('book');
    newBook.innerHTML = `<p>"${book.name}" by ${book.author}</p>
    `;
    const deleteBtn = document.createElement('button');
    deleteBtn.classList.add('delete');
    deleteBtn.textContent = 'Remove';
    deleteBtn.addEventListener('click', () => {
      deleteBook(book.id);
    });
    newBook.appendChild(deleteBtn);
    bookContainer.appendChild(newBook);
  }