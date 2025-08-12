const books = [
  {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    rating: 8.38,
  },
  {
    title: "Beside Still Waters",
    author: "Robert Sheckley",
    rating: 8.51,
  },
  {
    title: "The Dream of a Ridiculous Man",
    author: "Fyodor Dostoevsky",
    rating: 7.75,
  },
  { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
];
const BOOK_TITLE = "The Dream of a Ridiculous Man";
const AUTHOR = "Robert Sheckley";

// const bookWithTitle = books;
// const bookByAuthor = books;
const bookWithTitle = books.find(book => book.title === BOOK_TITLE);
const bookByAuthor = books.find(book => book.author === AUTHOR);
// Test the results


console.log('\nBook with title "The Dream of a Ridiculous Man":');
if (bookWithTitle) {
  console.log(`- Title: "${bookWithTitle.title}"`);
  console.log(`- Author: ${bookWithTitle.author}`);
  console.log(`- Rating: ${bookWithTitle.rating}`);
} else {
  console.log('Book not found');
}

console.log('\nBook by author "Robert Sheckley":');
if (bookByAuthor) {
  console.log(`- Title: "${bookByAuthor.title}"`);
  console.log(`- Author: ${bookByAuthor.author}`);
  console.log(`- Rating: ${bookByAuthor.rating}`);
} else {
  console.log('Book not found');
}

// Verification
console.log('\nVerification:');
console.log('bookWithTitle found:', bookWithTitle ? 'Yes' : 'No');
console.log('bookWithTitle title matches:', bookWithTitle && bookWithTitle.title === BOOK_TITLE ? 'Yes' : 'No');
console.log('bookByAuthor found:', bookByAuthor ? 'Yes' : 'No');
console.log('bookByAuthor author matches:', bookByAuthor && bookByAuthor.author === AUTHOR ? 'Yes' : 'No');