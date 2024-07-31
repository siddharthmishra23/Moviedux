import Footer from "./components/Footer";
import Header from "./components/Header";
import MoviesGrid from "./components/MoviesGrid";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Header />
        <MoviesGrid />
      </div>

      <Footer />
    </div>
  );
}

export default App;
