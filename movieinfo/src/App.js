import Footer from "./components/Footer";
import Header from "./components/Header";
import MoviesGrid from "./components/MoviesGrid";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./styles.css";
import Watchilist from "./components/Watchilist";
import { useEffect, useState } from "react";

function App() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    fetch("movies.json")
      .then((response) => response.json())
      .then((data) => setMovies(data));
  }, []);
  return (
    <div className="App">
      <div className="container">
        <Header />
        <Router>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/watchlist">Watchlist</Link>
              </li>
            </ul>
          </nav>
          <Routes>
            <Route path="/" element={<MoviesGrid movies={movies} />}></Route>
            <Route path="/watchlist" element={<Watchilist />}></Route>
          </Routes>
        </Router>
      </div>

      <Footer />
    </div>
  );
}

export default App;
