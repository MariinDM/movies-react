import { useMemo, useState } from "react";
import { useMovie } from "@/hooks/useMovies";
import { useSearch } from "@/hooks/useSearch";

import debounce from "just-debounce-it";
import CardMovie from "./CardMovie";

const Movies = ({ movies }) => {
  return (
    <>
      {movies.length === 0 ? (
        <div className="text-white mt-4">No se encontraron películas.</div>
      ) : (
        <section className="mt-6 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {movies?.map((movie) => (
            <CardMovie key={movie.id} movie={movie} />
          ))}
        </section>
      )}
    </>
  );
};

const SearchMovies = () => {
  const [sort, setSort] = useState(false);
  const { search, setSearch, error } = useSearch();
  const { movies, getMovies, loading } = useMovie({ query: search, sort });

  const debouncedGetMovies = useMemo(
    () =>
      debounce(({ query }) => {
        getMovies({ query });
      }, 500),
    [getMovies]
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    getMovies({ query: search });
  };

  const handleChange = (e) => {
    const { value } = e.target;
    setSearch(value);
    debouncedGetMovies({ query: value });
  };

  return (
    <>
      <h2 className="text-white text-center text-2xl font-bold mb-4">
        Busqueda de Películas
      </h2>

      <form className="flex gap-3" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Buscar películas..."
          value={search}
          onChange={handleChange}
          className="w-full p-2 rounded-md text-white bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="checkbox"
          checked={sort}
          onChange={() => setSort(!sort)}
          className="self-center"
        />
        <button
          className="p-2 bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          type="submit"
        >
          Buscar
        </button>
      </form>
      {error && <div className="text-red-500 mt-2">{error}</div>}

      {loading ? (
        <div className="text-white mt-4">Cargando...</div>
      ) : (
        <Movies movies={movies} />
      )}
    </>
  );
};

export default SearchMovies;
