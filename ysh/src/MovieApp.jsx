import React, { useEffect, useState } from "react";
import "./MovieApp.css";

const API_URL = "https://api.themoviedb.org/3/movie/popular";
const IMG_URL = "https://image.tmdb.org/t/p/w500";


const MovieApp = () => {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);

  useEffect(() => {
    fetch(`${API_URL}?api_key=${import.meta.env.VITE_API_KEY}&language=ko-KR&page=1`)
      .then((res) => res.json())
      .then((data) => setMovies(data.results))
      .catch((err) => console.error(err));
  }, []);

  const closeModal = () => setSelectedMovie(null);

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") closeModal();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  return (
    <div>
      <h1 className="title">인기 영화</h1>
      <div className="grid">
        {movies.map((movie) => (
          <div className="card" key={movie.id} onClick={() => setSelectedMovie(movie)}>
            <img src={IMG_URL + movie.poster_path} alt={movie.title} />
            <h3>{movie.title}</h3>
            <p>⭐ {movie.vote_average}</p>
          </div>
        ))}
      </div>

      {selectedMovie && (
        <>
          <div className="modal-backdrop" onClick={closeModal}></div>
          <div className="modal">
            <button className="close-btn" onClick={closeModal}>X</button>
            <img src={IMG_URL + selectedMovie.poster_path} alt={selectedMovie.title} />
            <h2>{selectedMovie.title}</h2>
            <p>{selectedMovie.overview}</p>
          </div>
        </>
      )}
    </div>
  );
};

export default MovieApp;
