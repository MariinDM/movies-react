const CardMovie = ({ movie }) => {
  const PATH_IMAGE = "https://image.tmdb.org/t/p/w500";
  return (
    <div key={movie.id} className="bg-gray-800 rounded-lg p-4">
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
