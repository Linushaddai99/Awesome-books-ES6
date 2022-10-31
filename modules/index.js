import { Book } from "./Book.js";
import { addBook } from "./addBooks.js";
import { displayBook } from "./displayBook.js";


const bookName = document.querySelector('.bookName');
const bookAuthor = document.querySelector('.bookAuthor');
const form = document.querySelector('.addBook');
const bookContainer = document.querySelector('.book-container');
const bookList = JSON.parse(localStorage.getItem('bookList')) || [];
// const bookList = [];

const bookForm = document.querySelector('#bookForm');
const bookSection = document.querySelector('#bookList');
const contactSection = document.querySelector('#contactDetails');

const listBtn = document.getElementById('listBtn');
const formBtn = document.querySelector('#addBtn');
const contactBtn = document.getElementById('contactBtn');

const listArr = [bookForm, contactSection];
const formArr = [bookSection, contactSection];
const contactArr = [bookForm, bookSection];

const message = document.querySelector('.message');

const redirect = () => {
    bookSection.classList.remove('hide');
    listArr.forEach((item) => {
      item.classList.add('hide');
    });
  }
  
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    message.textContent = '';
    const book = new Book(bookName.value, bookAuthor.value);
    console.log(book)
    bookList.push(book);
    console.log(bookList)
    addBook(bookList);
    form.reset();
    redirect();
  });
  
  bookList.forEach((book) => {
    displayBook(book);
  });

if (!bookList.length) {
  message.innerHTML = 'click Add new link to add a new book';
}

listBtn.addEventListener('click', () => {
  listBtn.style.color = '#e90074';
  formBtn.style.color = '#555';
  contactBtn.style.color = '#555';
  bookSection.classList.remove('hide');
  listArr.forEach((item) => {
    item.classList.add('hide');
  });
});

formBtn.addEventListener('click', () => {
  listBtn.style.color = '#555';
  formBtn.style.color = '#e90074';
  contactBtn.style.color = '#555';
  bookForm.classList.remove('hide');
  formArr.forEach((item) => {
    item.classList.add('hide');
  });
});

contactBtn.addEventListener('click', () => {
  listBtn.style.color = '#555';
  formBtn.style.color = '#555';
  contactBtn.style.color = '#e90074';
  contactSection.classList.remove('hide');
  contactArr.forEach((item) => {
    item.classList.add('hide');
  });
});


// const initial = () => {
//   bookSection.classList.remove('hide');
//   listArr.forEach((item) => {
//     item.classList.add('hide');
//   });
// };

// window.onload = initial();

const clock = document.querySelector('.clock');

const time = () => {
  const now = new Date();

  const months = ['January', 'February', 'March', ' April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  const year = now.getFullYear();
  const month = now.getMonth();
  const day = now.getDate();
  const h = now.getHours();
  const m = now.getMinutes();
  const s = now.getSeconds();

  const html = `
    <span class="month">${months[month]}, </span>
    <span class="day">${day},</span>
    <span class="year">${year}, </span>
    <ul>
        <li class="hour">${h}:</li>
        <li class="minutes">${m}:</li>
        <li class="seconds">${s}</li>
    </ul>
    `;
  clock.innerHTML = html;
};

setInterval(time, 1000);

  