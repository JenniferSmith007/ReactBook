function Book(props) {
  return (
    <div className="book-container">
      <h1>{props.title}</h1>
      <img src={props.image} alt="Book" />
      <h3>{props.description}</h3>
    </div>
  );
}

export default Book;
