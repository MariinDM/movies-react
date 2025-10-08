import { useState, useEffect, useRef } from "react";
import { User } from "lucide-react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const DropDown = ({ items, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const { logout } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (item) => {
    onSelect(item);
    setIsOpen(false);
  };

  const handleLogout = () => {
    logout();
    setIsOpen(false);
    navigate("/login");
  };

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <div>
        <button
          type="button"
          className="bg-light text-white px-4 py-2 rounded-lg"
          id="options-menu"
          aria-haspopup="true"
          aria-expanded={isOpen}
          onClick={handleToggle}
        >
          <User color="white" size={24} />
        </button>
      </div>

      {isOpen && (
        <div className="absolute right-0 z-10 mt-2 w-56 rounded-lg bg-light text-white">
          <div className="py-1" role="none">
            {items.map((item) => (
              <a
                key={item.id}
                href="#"
                className={`block px-4 py-2 text-sm text-white hover:bg-gray-700`}
                onClick={(e) => {
                  e.preventDefault();
                  if (item.method === "logout") {
                    handleLogout();
                  } else {
                    handleSelect(item);
                  }
                }}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default DropDown;
