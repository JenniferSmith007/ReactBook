import "./App.css";
import Book from "./components/Book";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
      <main>
        <div className="book-one">
          <Book
            title="The Alchemist"
            description="In the novel, even alchemy, the central symbol of the book, entails coaxing metal to achieve its own Personal Legend to turn into gold. As a result, the idea that all individuals should live in the singular pursuit of their individual dreams emerges as the primary theme of The Alchemist."
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkvdv9SmQuxU4OUqvh95tO2DACoO-ylZoGW-i1LZKtKe7wSsgmWoxmReNL7fLQBw3a35poe-MW&usqp=CAc"
          />
        </div>
        <div className="book-two">
          <Book
            title="The Giving Tree"
            description="The book follows the lives of an apple tree and a boy, who develop a relationship with one another. The tree is very giving and the boy evolves into a taking teenager, a middle-aged man, and finally an elderly man. Despite the fact that the boy ages in the story, the tree addresses the boy as boy his entire life."
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLAT28j_LWStZsb8TSLapjJhaMegETIx0LPRHmxnBriY1jHI89HtJhOZCzvF-y3EEUmyJfa_Ub&usqp=CAc"
          />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
