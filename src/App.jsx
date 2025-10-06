import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Home from "./pages/home/Home";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <h1>
                <Home />
              </h1>
            }
          />
          <Route path="/about" element={<h1>Acerca de</h1>} />
          <Route path="/contact" element={<h1>Contacto</h1>} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<h1>Página no encontrada</h1>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
