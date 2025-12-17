import { FavoriteProvider } from "@/providers/FavoriteProvider";

import SearchMovies from "@/components/SearchMovies";
import TrendingMovies from "@/components/TrendingMovies";
import CarouselComponent from "@components/Carousel";
import FavoriteMovies from "@/components/FavoriteMovies";
import Footer from "@components/Footer";

const Home = () => {
  return (
    <>
      <main className="relative bg-normal text-white min-h-screen p-8 space-y-3">
        <CarouselComponent />
        <FavoriteProvider>
          <SearchMovies />
          <FavoriteMovies />
          <TrendingMovies />
        </FavoriteProvider>
        <Footer />
      </main>
    </>
  );
};

export default Home;
