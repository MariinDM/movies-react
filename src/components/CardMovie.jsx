import { HeartIcon } from "@components/Icons";
import { useState } from "react";

const CardMovie = ({ movie }) => {
  const PATH_IMAGE = "https://image.tmdb.org/t/p/w500";
  const [isFavorite, setIsFavorite] = useState(false);

  const addFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <div key={movie.id} className="relative bg-gray-800 rounded-lg p-4">
      <button
        onClick={addFavorite}
        className="absolute top-5 right-5 z-10 w-6 h-6"
      >
        <HeartIcon filled={isFavorite} className="w-6 h-6" />
      </button>
      <img
        src={PATH_IMAGE + movie.poster_path}
        alt={movie.title}
        className="w-full h-auto rounded-md mb-2"
      />
      <h3 className="text-white text-center">{movie.title}</h3>
    </div>
  );
};

export default CardMovie;
