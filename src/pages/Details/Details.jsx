import React from "react";
import { useParams } from "react-router-dom";
import { useMovieDetails } from "../../hooks/useMovies";

const Details = () => {
  const { id } = useParams();
  const movie = useMovieDetails(id);

  if (!movie)
    return <p className="text-center text-white text-lg">Cargando...</p>;

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center relative"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`,
      }}
    >
      <div className="bg-black bg-opacity-70 p-6 rounded-lg text-white max-w-2xl text-center shadow-lg">
        <h2 className="text-3xl font-bold mb-4">{movie.title}</h2>
        <p className="text-lg italic mb-4">{movie.overview}</p>
        <p className="text-md font-semibold">
          ⭐ Puntuación: {movie.vote_average}
        </p>
        <p className="text-md">📅 Estreno: {movie.release_date}</p>
      </div>
    </div>
  );
};

export default Details;
