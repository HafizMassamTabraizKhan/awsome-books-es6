const getBooks = () => JSON.parse(localStorage.getItem('books')) || [];

const setBooks = (booksArray) => {
  localStorage.setItem('books', JSON.stringify(booksArray));
};

export { getBooks, setBooks };