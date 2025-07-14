let books = [];

function addBook() {
  const bookName = document.getElementById('bookName').value;
  const authorName = document.getElementById('authorName').value;
  const bookDescription = document.getElementById('bookDescription').value;
  const pagesNumber = parseInt(document.getElementById('pagesNumber').value);

  if (bookName && authorName && bookDescription && !isNaN(pagesNumber)) {
    const book = {
      name: bookName,
      authorName: authorName,
      bookDescription: bookDescription,
      pagesNumber: pagesNumber
    };

    books.push(book);
    showBooks();
    clearInputs();
  } else {
    alert('Please fill in all fields correctly.');
  }
}

function showBooks() {
  const booksDiv = books.map((book, index) => `
    <h3>Book #${index + 1}</h3>
    <p><strong>Name:</strong> ${book.name}</p>
    <p><strong>Author:</strong> ${book.authorName}</p>
    <p><strong>Description:</strong> ${book.bookDescription}</p>
    <p><strong>Pages:</strong> ${book.pagesNumber}</p>
    <button onclick="editBook(${index})">Edit</button>
    <hr>
  `).join('');

  document.getElementById('books').innerHTML = booksDiv;
}

function editBook(index) {
  const book = books[index];
  document.getElementById('bookName').value = book.name;
  document.getElementById('authorName').value = book.authorName;
  document.getElementById('bookDescription').value = book.bookDescription;
  document.getElementById('pagesNumber').value = book.pagesNumber;
  books.splice(index, 1); // Remove old entry
  showBooks();
}

function clearInputs() {
  document.getElementById('bookName').value = '';
  document.getElementById('authorName').value = '';
  document.getElementById('bookDescription').value = '';
  document.getElementById('pagesNumber').value = '';
}
