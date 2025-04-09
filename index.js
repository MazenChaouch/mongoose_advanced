const connectDb = require("./db");
const Book = require("./book");
connectDb();

const saveBook = async (b) => {
  const book = new Book(b);
  const newBook = await book.save();
  console.log(newBook);
};

// saveBook({
//   title: "The Alchemist",
//   author: "Paulo Coelho",
//   price: 14.99,
//   genre: "Fiction",
//   inStock: true,
// });

const createBook = async (b) => {
  const book = await Book.create(b);
  console.log(book);
};

// createBook({
//   title: "Atomic Habits",
//   author: "James Clear",
//   price: 18.99,
//   genre: "Non-Fiction",
//   inStock: true,
// });
const createBooks = async (books) => {
  const b = await Book.insertMany(books);
  console.log(b);
};

// createBooks([
//   {
//     title: "The Alchemist",
//     author: "Paulo Coelho",
//     price: 14.99,
//     genre: "Fiction",
//     rating: [4, 5],
//     publishedAt: "1993-03-01",
//     publisher: {
//       name: "HarperCollins",
//       location: "New York",
//     },
//   },
//   {
//     title: "Atomic Habits",
//     author: "James Clear",
//     price: 18.99,
//     genre: "Non-Fiction",
//     rating: [5, 5, 4],
//     publishedAt: "2018-10-16",
//     publisher: {
//       name: "Penguin Random House",
//       location: "New York",
//     },
//   },
//   {
//     title: "Dune",
//     author: "Frank Herbert",
//     price: 22.5,
//     genre: "Sci-Fi",
//     rating: [5, 5, 4],
//     publishedAt: "1965-08-01",
//     publisher: {
//       name: "Chilton Books",
//       location: "Philadelphia",
//     },
//   },
//   {
//     title: "Becoming",
//     author: "Michelle Obama",
//     price: 24.0,
//     genre: "Biography",
//     rating: [5, 4],
//     publishedAt: "2018-11-13",
//     publisher: {
//       name: "Crown Publishing",
//       location: "New York",
//     },
//   },
//   {
//     title: "1984",
//     author: "George Orwell",
//     price: 12.5,
//     genre: "Fiction",
//     rating: [4, 5],
//     publishedAt: "1949-06-08",
//     publisher: {
//       name: "Secker & Warburg",
//       location: "London",
//     },
//   },
//   {
//     title: "The Hobbit",
//     author: "J.R.R. Tolkien",
//     price: 15.0,
//     genre: "Fantasy",
//     rating: [5, 5],
//     publishedAt: "1937-09-21",
//     publisher: {
//       name: "George Allen & Unwin",
//       location: "London",
//     },
//   },
//   {
//     title: "Sapiens",
//     author: "Yuval Noah Harari",
//     price: 21.99,
//     genre: "Non-Fiction",
//     rating: [5, 5, 5],
//     publishedAt: "2011-06-04",
//     publisher: {
//       name: "Harvill Secker",
//       location: "London",
//     },
//   },
//   {
//     title: "Steve Jobs",
//     author: "Walter Isaacson",
//     price: 20.99,
//     genre: "Biography",
//     rating: [4, 5],
//     publishedAt: "2011-10-24",
//     publisher: {
//       name: "Simon & Schuster",
//       location: "New York",
//     },
//   },
//   {
//     title: "Brave New World",
//     author: "Aldous Huxley",
//     price: 13.0,
//     genre: "Sci-Fi",
//     rating: [4, 4],
//     publishedAt: "1932-01-01",
//     publisher: {
//       name: "Chatto & Windus",
//       location: "London",
//     },
//   },
//   {
//     title: "The Name of the Wind",
//     author: "Patrick Rothfuss",
//     price: 17.5,
//     genre: "Fantasy",
//     rating: [5, 5, 5],
//     publishedAt: "2007-03-27",
//     publisher: {
//       name: "DAW Books",
//       location: "New York",
//     },
//   },
// ]);

const findBooks = async () => {
  const books = await Book.find();
  console.log(books);
};

findBooks();

const findBookById = async (id) => {
  const book = await Book.findById(id);
  console.log(book.description());
};
// findBookById("67f66259745d976e5de95ad5");

const findBookByTitle = async (title) => {
  const book = await Book.findOne({ title });
  console.log(book);
};

// findBookByTitle("Atomic Habits");

const findBooksByTitle = async (title) => {
  const book = await Book.find({ title });
  console.log(book);
};

// findBooksByTitle("Atomic Habits");

const updateBookById = async (id, b) => {
  const updated = await Book.findByIdAndUpdate(id, b);
  console.log(updated);
};

// updateBookById("67f64221e5079551423250d9", {
//   price: 18,
//   title: "Potter",
// });
const updateBookByTitle = async (title, b) => {
  const updated = await Book.findOneAndUpdate(title, b);
  console.log(updated);
};

// updateBookByTitle({ title: "Atomic Habits" }, { inStock: false });
const updateBooksByTitle = async (title, b) => {
  const updated = await Book.updateMany(title, b);
  console.log(updated);
};

// updateBooksByTitle({ title: "Atomic Habits" }, { inStock: false });

const deleteBookById = async (id) => {
  const deleted = await Book.findByIdAndDelete(id);
  console.log(deleted);
};

// deleteBookById("67f66259745d976e5de95ad4");

const deleteBooksByTitle = async (title) => {
  const deleted = await Book.deleteMany(title);
  console.log(deleted);
};

// deleteBooksByTitle({ title: "The Alchemist" });
//
const queryOne = async () => {
  const books = await Book.where("price")
    .gt(10)
    .lt(20)
    .where("inStock")
    .equals(true);
};
queryOne();
const queryTwo = async () => {
  const books = await Book.where("");
};
const getBooksInStock = async () => {
  const books = await Book.getInStock();
  console.log(books);
};
// getBooksInStock();
