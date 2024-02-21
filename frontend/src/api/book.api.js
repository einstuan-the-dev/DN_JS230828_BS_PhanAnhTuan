import axios from "axios";

//get all book
export const fetchbooksAPI = async () => {
  const response = await axios.get("http://localhost:8080/api/v1/books");
  return response.data;
};

// add new book
export const addBookAPI = async (add_book) => {
  const response = await axios.post(
    "http://localhost:8080/api/v1/books",
    add_book
  );
  return response.data;
};

// delete book by id
export const deleteBookByIDAPI = async (id) => {
  const response = await axios.delete(
    `http://localhost:8080/api/v1/books/${id}`
  );
  return response.data;
};
