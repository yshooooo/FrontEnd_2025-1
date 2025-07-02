import { useState, Suspense } from "react";
import { useQuery } from "@tanstack/react-query";
import MovieList from "./MovieList";
import MovieModal from "./MovieModal";
import { fetchMovies } from "../api/fetchMovies";

export default function MovieApp() {
  const [selectedMovie, setSelectedMovie] = useState(null);

  const { data: movies = [] } = useQuery({
    queryKey: ["movies"],
    queryFn: fetchMovies,
    suspense: true,
  });

  return (
    <div>
      <h1 className="title">인기 영화</h1>

      <Suspense fallback={<p className="loading">로딩 중...</p>}>
        <MovieList movies={movies} onSelect={setSelectedMovie} />
      </Suspense>

      {selectedMovie && (
        <MovieModal
          movie={selectedMovie}
          onClose={() => setSelectedMovie(null)}
        />
      )}
    </div>
  );
}
