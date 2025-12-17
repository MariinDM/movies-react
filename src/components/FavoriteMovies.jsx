import { useFavoriteMovie } from "@/hooks/useFavoriteMovie";
import CardMovie from "./CardMovie";

const Movies = ({ title }) => {
  const { favorites } = useFavoriteMovie();

  return (
    <>
      <h2 className="text-white text-2xl font-bold mb-4">{title}</h2>
      {favorites.length === 0 ? (
        <div className="text-white mt-4">No se encontraron películas.</div>
      ) : (
        <section className="mt-6 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {favorites.map((movie) => (
            <CardMovie key={movie.id} movie={movie} />
          ))}
        </section>
      )}
    </>
  );
};

const FavoriteMovies = () => {
  return <Movies title="Películas Favoritas" />;
};

export default FavoriteMovies;
