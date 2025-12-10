import { useEffect, useState } from "react";
import { AuthContext } from "@context/AuthContext";

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Verifica si hay un token al cargar la aplicación
    const token = localStorage.getItem("access_token");
    if (token) {
      setIsAuthenticated(true);
      // Aquí podrías obtener los datos del usuario si tu API lo permite
    }
    setLoading(false);
  }, []);

  const login = (token, userData = null) => {
    localStorage.setItem("access_token", token);
    setUser(userData);
    setIsAuthenticated(true);
  };

  const logout = () => {
    localStorage.removeItem("access_token");
    setUser(null);
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated,
        loading,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
