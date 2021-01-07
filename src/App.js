import "./App.css";
import Book from "./components/Book";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Data from "./Data";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
      <main>
        <div className="book-one">
          {Data.map((books, index) => {
            return <Book books={books} />;
          })}
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
