import MovieCard from "./MovieCard";

function Watchilist({ movies, toggleWatchlist, watchlist }) {
  return (
    <div>
      <h1 className="title">Your Watchlist</h1>
      <div className="watchlist">
        {watchlist.length > 0 ? (
          watchlist.map((id) => {
            const movie = movies.find((movie) => movie.id === id);
            return (
              <MovieCard
                key={id}
                movie={movie}
                toggleWatchlist={toggleWatchlist}
                isWatchlisted={true}
              />
            );
          })
        ) : (
          <div style={{ display: "flex", justifyContent: "center" }}>
            <h3>* Nothing in your watchlist</h3>
          </div>
        )}
      </div>
    </div>
  );
}

export default Watchilist;
