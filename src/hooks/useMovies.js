import { useState, useEffect } from "react";
import { tmdbApi } from "../services/tmdb";

export const useSearchMovies = (query) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    if (!query) return;
    const fetchMovies = async () => {
      const results = await tmdbApi.searchMovies(query);
      setMovies(results);
    };
    fetchMovies();
  }, [query]);

  return movies;
};

export const useMovieDetails = (movieId) => {
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    if (!movieId) return;
    const fetchMovie = async () => {
      const data = await tmdbApi.getMovieDetails(movieId);
      setMovie(data);
    };
    fetchMovie();
  }, [movieId]);

  return movie;
};
