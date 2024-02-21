const connection = require("../configs/db.config");

// get all books
const getAllBooks = () => {
  const query = "select * from books";
  const resultQuery = new Promise((resolve, reject) => {
    connection.query(query, (error, results) => {
      resolve(results);
    });
  });
  return resultQuery;
};

// get book by id
const getBookById = (id) => {
  const query = "select * from books where id = " + id;

  const resultQuery = new Promise((resolve, reject) => {
    connection.query(query, (error, results) => {
      if (error) {
        reject(error);
      }
      resolve(results);
    });
  });

  return resultQuery;
};

// add new book
const addNewBook = (book) => {
  const { name, description, price, created_at, updated_at } = book;
  const insertQuery = `insert into books (name, description, price, created_at, updated_at) 
                          values ('${name}', '${description}', '${price}', '${created_at}', '${updated_at}')`;

  const resultQuery = new Promise((resolve, reject) => {
    connection.query(insertQuery, (error, results) => {
      if (error) {
        reject(error);
      }
      resolve(results);
    });
  });

  return resultQuery;
};

// delete book by id
const deleteBookById = (id) => {
  const query = `delete from books where id = ${id};`;
  const resultQuery = new Promise((resolve, reject) => {
    connection.query(query, (error, results) => {
      resolve(results);
    });
  });

  return resultQuery;
};

// edit book

module.exports = { getAllBooks, addNewBook, getBookById, deleteBookById };
