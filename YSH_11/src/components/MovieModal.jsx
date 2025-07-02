import { useEffect } from "react";
const IMG_URL = "https://image.tmdb.org/t/p/w500";

export default function MovieModal({ movie, onClose }) {
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  return (
    <>
      <div className="modal-backdrop" onClick={onClose}></div>
      <div className="modal">
        <button className="close-btn" onClick={onClose}>
          X
        </button>
        <img src={IMG_URL + movie.poster_path} alt={movie.title} />
        <h2>{movie.title}</h2>
        <p>{movie.overview}</p>
      </div>
    </>
  );
}
