const express = require("express");
const {
  getAllBooks,
  addNewBook,
  getBookById,
  deleteBookById,
} = require("../controllers/book.controller");
const bookRoute = express.Router();

// get all books
bookRoute.get("/", (req, res) => {
  const books = getAllBooks();
  books.then((data) => {
    res.status(200).json(data);
  });
});

// get book by id
bookRoute.get("/:id", (req, res) => {
  const book = getBookById(req.params.id);
  book.then((data) => {
    console.log(data);
    res.status(200).json(data);
  });
});

// add new book
bookRoute.post("/", (req, res) => {
  const dataRequest = req.body;

  const book = addNewBook(dataRequest);

  book.then((response) => {
    console.log(response);
    res.status(200).json({ id: response.insertId, ...dataRequest });
  });
});

//delete book by id
bookRoute.delete("/:id", async (req, res) => {
  const data = deleteBookById(req.params.id);
  data.then(() => {
    res.status(200).json("Done");
  });
});

module.exports = { bookRoute };
