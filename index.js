import addBook from './modules/AddBook.js';
import BookStore from './modules/BookStore.js';
import Contact from './modules/Contact.js';
import { mainContainer, navLinks } from './modules/DOMVariables.js';
import BooksList from './modules/BooksList.js';
import RemoveBook from './modules/RemoveBook.js';
import { DateTime } from './modules/Luxon.js';

document.querySelector('time').innerText = DateTime.now().toLocaleString(DateTime.DATETIME_MED);

const bookStore = new BookStore();

BooksList(bookStore);

RemoveBook(bookStore);

navLinks.forEach((navLink) => {
  navLink.addEventListener('click', (e) => {
    navLinks.forEach((navLink) => {
      navLink.classList.remove('text-primary');
    });
    e.target.classList.add('text-primary');
    mainContainer.innerHTML = '';

    switch (e.target.id) {
      case 'list':
        BooksList(bookStore);
        break;
      case 'add-new':
        addBook(bookStore);
        break;
      case 'contact':
        Contact(bookStore);
        break;
      default:
        BooksList(bookStore);
        break;
    }
  });
});
