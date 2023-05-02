import addBook from './modules/addBook.js';
import BookStore from './modules/bookStore.js';
import contact from './modules/contact.js';
import booksList from './modules/booksList.js';
import removeBook from './modules/removeBooks.js';
import { mainContainer, navLinks } from './modules/DOMVariables.js';
import { DateTime } from './node_modules/luxon/build/es6/luxon.js';

document.querySelector('time').innerHTML = DateTime.now().toLocaleString(DateTime.DATETIME_MED);

const bookStore = new BookStore();

booksList(bookStore);

removeBook(bookStore);

navLinks.forEach((navLink) => {
  navLink.addEventListener('click', (e) => {
    navLinks.forEach((navLink) => {
      navLink.classList.remove('text-primary');
    });
    e.target.classList.add('text-primary');
    mainContainer.innerHTML = '';

    switch (e.target.id) {
      case 'list':
        booksList(bookStore);
        break;
      case 'add-new':
        addBook(bookStore);
        break;
      case 'contact':
        contact(bookStore);
        break;
      default:
        booksList(bookStore);
        break;
    }
  });
});