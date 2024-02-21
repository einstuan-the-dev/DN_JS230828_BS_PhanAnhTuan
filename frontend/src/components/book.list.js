const ItemBook = (props) => {
  const { id, name, description, price, created_at, updated_at } = props.books;
  return (
    <tr>
      <td>{props.index + 1}</td>
      <td>{name}</td>
      <td>{description}</td>
      <td>{price}</td>
      <td>{created_at}</td>
      <td>{updated_at}</td>
      <td>
        <button onClick={() => props.deleteBook(id)}>Delete</button>
        <button>Edit</button>
      </td>
    </tr>
  );
};

export default ItemBook;
