function Book(props) {
  const { books } = props;
  return (
    <div className="book-container">
      <h1>{books.title}</h1>
      <img src={books.image} alt="Book" />
      <h3>{books.description}</h3>
    </div>
  );
}

export default Book;
