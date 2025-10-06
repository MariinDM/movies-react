import { Link } from "react-router-dom";
import { Clapperboard } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 bg-normal p-4 border-b border-gray-700">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Clapperboard color="white" size={24} />
          <h2 className="text-white">Marin</h2>
        </div>
        <ul className="flex space-x-4">
          <li>
            <Link to="/" className="text-white hover:text-gray-300">
              Inicio
            </Link>
          </li>
          <li>
            <Link to="/about" className="text-white hover:text-gray-300">
              Acerca de
            </Link>
          </li>
          <li>
            <Link to="/contact" className="text-white hover:text-gray-300">
              Contacto
            </Link>
          </li>
        </ul>
        <Link to="/login" className="bg-light text-white px-4 py-2 rounded">
          Iniciar Sesión
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
