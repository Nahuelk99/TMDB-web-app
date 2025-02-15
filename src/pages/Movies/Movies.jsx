// src/pages/Movies/Movies.jsx
import React, { useState, useEffect } from "react";
import { fetchMovies } from "../../services/tmdb";

function Movies() {
  const [movies, setMovies] = useState([]);
  const [type, setType] = useState("popular");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const loadMovies = async () => {
      setLoading(true);
      try {
        const movieData = await fetchMovies(type);
        setMovies(movieData);
      } catch (error) {
        console.error("Error loading movies:", error);
      }
      setLoading(false);
    };
    loadMovies();
  }, [type]);

  const getTypeTitle = (type) => {
    const titles = {
      popular: "Populares",
      top_rated: "Mejor Calificadas",
      now_playing: "En Cartelera",
      upcoming: "Próximas",
    };
    return titles[type] || type;
  };

  const getScoreColor = (score) => {
    if (score >= 70) return "bg-green-500";
    if (score >= 50) return "bg-yellow-500";
    return "bg-red-500";
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">
        Películas {getTypeTitle(type)}
      </h1>

      {/* Botones de Filtro */}
      <div className="flex flex-wrap gap-2 mb-8">
        {[
          { key: "popular", label: "Populares" },
          { key: "top_rated", label: "Mejor Calificadas" },
          { key: "now_playing", label: "En Cartelera" },
          { key: "upcoming", label: "Próximas" },
        ].map((filter) => (
          <button
            key={filter.key}
            onClick={() => setType(filter.key)}
            className={`px-4 py-2 rounded-lg transition ${
              type === filter.key
                ? "bg-blue-500 text-white"
                : "bg-gray-100 hover:bg-gray-200"
            }`}
          >
            {filter.label}
          </button>
        ))}
      </div>

      {/* Grid de Películas */}
      {loading ? (
        <div className="text-center py-12">Cargando...</div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {movies.map((movie) => {
            const score = Math.round(movie.vote_average * 10);
            return (
              <div
                key={movie.id}
                className="bg-white rounded-lg shadow-md overflow-hidden relative group"
              >
                <div className="relative">
                  <img
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    alt={movie.title}
                    className="w-full h-[300px] object-cover"
                  />
                  <div
                    className={`absolute top-2 right-2 px-2 py-1 rounded-full text-sm text-white ${getScoreColor(
                      score
                    )}`}
                  >
                    {score}%
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-lg mb-2">{movie.title}</h3>
                  <p className="text-gray-600 text-sm">
                    {new Date(movie.release_date).toLocaleDateString("es-ES", {
                      day: "numeric",
                      month: "short",
                      year: "numeric",
                    })}
                  </p>
                </div>
                <button className="absolute inset-0 bg-black bg-opacity-50 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center">
                  Ver más
                </button>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default Movies;
