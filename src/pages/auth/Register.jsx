import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "@hooks/useAuth";

import Input from "@components/Input";
import Button from "@components/Button";
import authService from "@services/auth-service";

const Register = () => {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [formData, setFormData] = useState({
    email: "",
    username: "",
    password: "",
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const payload = await authService.register(formData);
      const { data } = payload;
      const { access_token, user } = data;

      if (access_token) {
        login(access_token, user);
      }
      navigate("/");
    } catch (error) {
      setError(error.message || "Error al registrarse");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="bg-normal min-h-screen flex items-center justify-center">
      <div className="flex flex-col rounded-lg p-8 w-full max-w-md shadow-darker shadow-xl gap-5">
        <h1 className="text-white text-center text-2xl font-bold">
          Regístrate
        </h1>
        <h4 className="text-white text-center">
          Crea una cuenta para disfrutar de todas las funcionalidades.
        </h4>

        {error && (
          <div className="bg-red-500 text-white p-3 rounded text-sm">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <Input
            type="email"
            name="email"
            placeholder="Correo Electrónico"
            className="rounded-t-lg"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <Input
            type="text"
            name="username"
            placeholder="Usuario"
            className="rounded-none"
            value={formData.username}
            onChange={handleChange}
            required
          />
          <Input
            type="password"
            name="password"
            placeholder="Contraseña"
            className="rounded-b-lg"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <Button
            type="submit"
            className="mt-4"
            disabled={
              !formData.email ||
              !formData.username ||
              !formData.password ||
              loading
            }
          >
            {loading ? "Cargando..." : "Regístrate"}
          </Button>
        </form>
        <p className="text-white text-center">
          ¿Ya tienes una cuenta?{" "}
          <Link to="/login" className="text-blue-500 hover:underline">
            Inicia Sesión
          </Link>
        </p>
      </div>
    </main>
  );
};

export default Register;
