const API_URL = "https://api.themoviedb.org/3/movie/popular";

export const fetchMovies = async () => {
  const res = await fetch(
    `${API_URL}?api_key=${import.meta.env.VITE_API_KEY}&language=ko-KR&page=1`
  );
  if (!res.ok) throw new Error("영화를 불러오지 못했습니다.");
  const data = await res.json();
  return data.results;
};
