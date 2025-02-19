import React, { useState } from "react";
import { useSearchMovies } from "../../hooks/useMovies";
import { Link } from "react-router-dom";

const Search = () => {
  const [query, setQuery] = useState("");
  const movies = useSearchMovies(query);

  return (
    <div>
      <input
        type="text"
        placeholder="Buscar película..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <div>
        {movies.map((movie) => (
          <div key={movie.id}>
            <h3>{movie.title}</h3>
            <p>{movie.release_date}</p>
            <Link to={`/movie/${movie.id}`}>Ver detalles</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Search;
