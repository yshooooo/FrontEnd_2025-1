const IMG_URL = "https://image.tmdb.org/t/p/w500";

export default function MovieList({ movies, onSelect }) {
  return (
    <div className="grid">
      {movies.map((movie) => (
        <div className="card" key={movie.id} onClick={() => onSelect(movie)}>
          <img src={IMG_URL + movie.poster_path} alt={movie.title} />
          <h3>{movie.title}</h3>
          <p>⭐ {movie.vote_average.toFixed(2)}</p>
        </div>
      ))}
    </div>
  );
}
