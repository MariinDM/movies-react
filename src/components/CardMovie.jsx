import { useFavoriteMovie } from "@/hooks/useFavoriteMovie";
import { HeartIcon } from "@components/Icons";

const PATH_IMAGE = import.meta.env.VITE_PATH_IMAGE;
const CardMovie = ({ movie }) => {
  const { favorites, addToFavorites, removeFromFavorites } = useFavoriteMovie();

  const isMovieInFavorites = (movieId) => {
    return favorites.some((movie) => movie.id === movieId);
  };

  const addOrRemoveFavoriteMovie = () => {
    if (isMovieInFavorites(movie.id)) {
      removeFromFavorites(movie.id);
    } else {
      addToFavorites(movie);
    }
  };

  return (
    <div key={movie.id} className="relative bg-gray-800 rounded-lg p-4">
      <button
        onClick={addOrRemoveFavoriteMovie}
        className="absolute top-5 right-5 z-10 w-6 h-6"
      >
        <HeartIcon filled={isMovieInFavorites(movie.id)} className="w-6 h-6" />
      </button>
      <img
        src={PATH_IMAGE + movie.poster_path}
        alt={movie.title}
        className="w-full h-auto rounded-md mb-2"
        loading="lazy"
      />
      <h3 className="text-white text-center">{movie.title}</h3>
    </div>
  );
};

export default CardMovie;
