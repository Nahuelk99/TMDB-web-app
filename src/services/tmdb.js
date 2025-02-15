// src/services/tmdb.js

import axios from "axios";

const API_KEY = "46137ea13ce4068c2f24639ffc915770";
const BASE_URL = "https://api.themoviedb.org/3/movie";

// Función para obtener las películas populares
export const fetchMovies = async (type = "popular") => {
  try {
    const response = await axios.get(`${BASE_URL}/${type}`, {
      params: {
        api_key: API_KEY,
        language: "es-ES",
      },
    });
    return response.data.results;
  } catch (error) {
    console.error("Error fetching movies:", error);
    return [];
  }
};
