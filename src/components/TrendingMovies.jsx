import movieService from "@/services/movie-service";
import { useEffect, useState } from "react";

const TrendingMovies = () => {
  const [movies, setMovies] = useState([]);

  const getMovies = async () => {
    try {
      const response = await movieService.getTrendingMovies();
      const { data } = response;
      setMovies(data);
    } catch (error) {
      console.error("Error fetching trending movies:", error);
    }
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div>
      <h2 className="text-white text-2xl font-bold mb-4">
        Películas de Tendencia
      </h2>

      <section className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {/* Aquí se mapearían las películas obtenidas */}
        {movies.map((movie) => (
          <div key={movie.id} className="bg-gray-800 rounded-lg p-4">
            <img
              src={movie.image}
              alt={movie.title}
              className="w-full h-auto rounded-md mb-2"
            />
            <h3 className="text-white text-center">{movie.title}</h3>
          </div>
        ))}
      </section>
    </div>
  );
};

export default TrendingMovies;
