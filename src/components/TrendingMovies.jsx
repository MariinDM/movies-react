import movieService from "@/services/movie-service";
import { useEffect, useState } from "react";
import CardMovie from "./CardMovie";

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
        {movies.map((movie) => (
          <CardMovie key={movie.id} movie={movie} />
        ))}
      </section>
    </div>
  );
};

export default TrendingMovies;
