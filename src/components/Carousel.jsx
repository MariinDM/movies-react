import { useState, useEffect, useRef } from "react";

const CarouselComponent = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startPos, setStartPos] = useState(0);
  const [currentTranslate, setCurrentTranslate] = useState(0);
  const [prevTranslate, setPrevTranslate] = useState(0);
  const containerRef = useRef(null);

  const movies = [
    {
      id: 1,
      title: "The Shawshank Redemption",
      description:
        "Two imprisoned men bond over a number of years, finding solace and eventual redemption.",
      image:
        "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=1200&h=600&fit=crop",
      rating: "9.3",
      year: "1994",
    },
    {
      id: 2,
      title: "Inception",
      description:
        "A thief who steals corporate secrets through dream-sharing technology.",
      image:
        "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=1200&h=600&fit=crop",
      rating: "8.8",
      year: "2010",
    },
    {
      id: 3,
      title: "Interstellar",
      description:
        "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
      image:
        "https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=1200&h=600&fit=crop",
      rating: "8.6",
      year: "2014",
    },
    {
      id: 4,
      title: "The Dark Knight",
      description:
        "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham.",
      image:
        "https://images.unsplash.com/photo-1509347528160-9a9e33742cdb?w=1200&h=600&fit=crop",
      rating: "9.0",
      year: "2008",
    },
    {
      id: 5,
      title: "Pulp Fiction",
      description:
        "The lives of two mob hitmen, a boxer, a gangster and his wife intertwine in four tales of violence.",
      image:
        "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=1200&h=600&fit=crop",
      rating: "8.9",
      year: "1994",
    },
  ];

  useEffect(() => {
    if (isDragging) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === movies.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [movies.length, isDragging]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const handleDragStart = (e) => {
    setIsDragging(true);
    const clientX = e.type.includes("mouse") ? e.clientX : e.touches[0].clientX;
    setStartPos(clientX);
    setPrevTranslate(currentTranslate);
  };

  const handleDragMove = (e) => {
    if (!isDragging) return;
    const clientX = e.type.includes("mouse") ? e.clientX : e.touches[0].clientX;
    const diff = clientX - startPos;
    setCurrentTranslate(prevTranslate + diff);
  };

  const handleDragEnd = () => {
    if (!isDragging) return;
    setIsDragging(false);

    const movedBy = currentTranslate - prevTranslate;

    if (movedBy < -50 && currentIndex < movies.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else if (movedBy > 50 && currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }

    setCurrentTranslate(0);
    setPrevTranslate(0);
  };

  return (
    <>
      <section className="p-8">
        <div className="relative w-full">
          {/* Carousel Container */}
          <div
            ref={containerRef}
            className="relative h-[400px] md:h-[600px] overflow-hidden rounded-lg cursor-grab active:cursor-grabbing select-none"
            onMouseDown={handleDragStart}
            onMouseMove={handleDragMove}
            onMouseUp={handleDragEnd}
            onMouseLeave={handleDragEnd}
            onTouchStart={handleDragStart}
            onTouchMove={handleDragMove}
            onTouchEnd={handleDragEnd}
          >
            {movies.map((movie, index) => (
              <div
                key={movie.id}
                className={`absolute w-full h-full transition-all duration-700 ease-in-out transform ${
                  index === currentIndex
                    ? "translate-x-0 opacity-100"
                    : index < currentIndex
                    ? "-translate-x-full opacity-0"
                    : "translate-x-full opacity-0"
                }`}
              >
                {/* Image */}
                <img
                  src={movie.image}
                  className="absolute block w-full h-full object-cover"
                  alt={movie.title}
                  loading={index === 0 ? "eager" : "lazy"}
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

                {/* Movie Info */}
                <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 text-white">
                  <div className="max-w-3xl">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="bg-yellow-500 text-black px-3 py-1 rounded-full text-sm font-bold">
                        ⭐ {movie.rating}
                      </span>
                      <span className="text-gray-300 text-sm">
                        {movie.year}
                      </span>
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold mb-4 drop-shadow-lg">
                      {movie.title}
                    </h2>
                    <p className="text-lg md:text-xl text-gray-200 mb-6 drop-shadow-md max-w-2xl">
                      {movie.description}
                    </p>
                    <div className="flex gap-4">
                      <button className="bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors flex items-center gap-2">
                        <svg
                          className="w-5 h-5"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                        </svg>
                        Watch Now
                      </button>
                      <button className="bg-gray-600/80 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-700/80 transition-colors">
                        More Info
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Indicators */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-30 flex gap-2">
            {movies.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`transition-all ${
                  index === currentIndex
                    ? "w-8 bg-white"
                    : "w-2 bg-white/50 hover:bg-white/75"
                } h-2 rounded-full cursor-pointer`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default CarouselComponent;
