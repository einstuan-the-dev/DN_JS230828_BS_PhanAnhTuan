import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState, useRef } from "react";
import { addBookAPI, deleteBookByIDAPI, fetchbooksAPI } from "./api/book.api";
import ItemBook from "./components/book.list";

function App() {
  const nameRef = useRef();
  const descriptionRef = useRef();
  const priceRef = useRef();
  const created_atRef = useRef();
  const updated_atRef = useRef();

  const [books, setBooks] = useState([]);

  const fetchBooks = async () => {
    const fetchBooks = await fetchbooksAPI();
    setBooks(fetchBooks);
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  //add new book
  const AddBook = async () => {
    const name = nameRef.current.value;
    const description = descriptionRef.current.value;
    const price = priceRef.current.value;
    const created_at = created_atRef.current.value;
    const updated_at = updated_atRef.current.value;
    const new_book = {
      name,
      description,
      price,
      created_at,
      updated_at,
    };
    await addBookAPI(new_book);
    fetchBooks();
  };

  // delete book by id
  const deleteBook = async (id) => {
    await deleteBookByIDAPI(id);
    fetchBooks();
  };

  return (
    <div className="App">
      <div className="ListBooks">
        <div>
          <label for="nameBook">name</label>
          <br />
          <input type="text" id="nameBook" name="nameBook" ref={nameRef} />
          <br />
          <label for="description">description</label>
          <br />
          <input
            type="text"
            id="description"
            name="description"
            ref={descriptionRef}
          />
          <br />
          <label for="price">price</label>
          <br />
          <input type="text" id="price" name="price" ref={priceRef} />
          <br />
          <label for="created_at">created_at</label>
          <br />
          <input
            type="text"
            id="created_at"
            name="created_at"
            ref={created_atRef}
          />
          <br />
          <label for="updated_at">updated_at</label>
          <br />
          <input
            type="text"
            id="updated_at"
            name="updated_at"
            ref={updated_atRef}
          />
          <br />
          <input type="submit" onClick={AddBook} />
        </div>
        <table>
          <tr>
            <th>Index</th>
            <th>name</th>
            <th>description</th>
            <th>price</th>
            <th>created_at</th>
            <th>updated_at</th>
          </tr>
          {books.map((books, index) => (
            <ItemBook index={index} books={books} deleteBook={deleteBook} />
          ))}
        </table>
      </div>
    </div>
  );
}

export default App;
