import CarouselComponent from "@components/Carousel";

const Home = () => {
  return (
    <>
      <main className="bg-normal text-white min-h-screen p-8 space-y-3">
        <CarouselComponent />
        <h1>🏠 Página Principal</h1>
        <p>Bienvenido a la app de películas</p>
      </main>
    </>
  );
};

export default Home;
