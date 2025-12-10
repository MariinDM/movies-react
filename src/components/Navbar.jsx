import { Link } from "react-router-dom";
import { Clapperboard } from "lucide-react";
import DropDown from "./DropDown";
import { useAuth } from "../hooks/useAuth";

const Navbar = () => {
  const { isAuthenticated, loading } = useAuth();

  const handleDropdownSelect = (item) => {
    console.log("Selected:", item);
  };

  if (loading) {
    return null; // o un loader
  }

  const routes = [
    { name: "Inicio", path: "/" },
    { name: "Acerca de", path: "/about" },
    { name: "Contacto", path: "/contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-normal p-4 border-b border-gray-700">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Clapperboard color="white" size={24} />
          <h2 className="text-white">Marin</h2>
        </div>
        <ul className="flex space-x-4">
          {routes.map((route) => (
            <li key={route.name}>
              <Link to={route.path} className="text-white hover:text-gray-300">
                {route.name}
              </Link>
            </li>
          ))}
        </ul>
        {isAuthenticated ? (
          <DropDown
            items={[
              { id: 1, name: "Mi Cuenta", method: "account" },
              { id: 2, name: "Cerrar Sesión", method: "logout" },
            ]}
            onSelect={handleDropdownSelect}
          />
        ) : (
          <Link to="/login" className="bg-light text-white px-4 py-2 rounded">
            Iniciar Sesión
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
