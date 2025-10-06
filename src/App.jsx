import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<h1>Inicio</h1>} />
        <Route path="/about" element={<h1>Acerca de</h1>} />
        <Route path="/contact" element={<h1>Contacto</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
