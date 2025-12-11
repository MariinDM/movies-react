import SearchMovies from "@/components/SearchMovies";
import TrendingMovies from "@/components/TrendingMovies";
import CarouselComponent from "@components/Carousel";

const Home = () => {
  return (
    <>
      <main className="bg-normal text-white min-h-screen p-8 space-y-3">
        <CarouselComponent />
        <SearchMovies />
        <TrendingMovies />
      </main>
    </>
  );
};

export default Home;
