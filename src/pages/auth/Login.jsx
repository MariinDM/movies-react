import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Input from "../../components/Input";
import Button from "../../components/Button";
import authService from "../../services/auth-service";
import { useAuth } from "../../context/AuthContext";

const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const payload = await authService.login(formData);
      const access_token = payload.data.access_token;

      if (access_token) {
        // Usa el login del contexto para actualizar el estado global
        login(access_token, payload.data.user);
      }

      navigate("/");
    } catch (error) {
      setError(error.message || "Error al iniciar sesión");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="bg-normal min-h-screen flex items-center justify-center">
      <div className="flex flex-col rounded-lg p-8 w-full max-w-md shadow-darker shadow-xl gap-4">
        <h1 className="text-white text-center text-2xl font-bold">
          Iniciar Sesión
        </h1>

        <h4 className="text-white text-center">
          Bienvenido de nuevo! Por favor, ingresa tus credenciales.
        </h4>

        {error && (
          <div className="bg-red-500 text-white p-3 rounded text-sm">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div>
            <Input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Correo Electrónico"
              className="rounded-t-lg"
              required
            />
          </div>
          <div>
            <Input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Contraseña"
              className="rounded-b-lg"
              required
            />
          </div>
          <Link
            to="/forgot-password"
            className="flex justify-self-end my-3 text-blue-500 hover:underline text-sm ml-auto"
          >
            ¿Olvidaste tu contraseña?
          </Link>
          <Button
            type="submit"
            disabled={!formData.email || !formData.password || loading}
          >
            {loading ? "Cargando..." : "Iniciar Sesión"}
          </Button>
        </form>
        <p className="text-white text-center">
          ¿No tienes una cuenta?{" "}
          <Link to="/register" className="text-blue-500 hover:underline">
            Regístrate
          </Link>
        </p>
      </div>
    </main>
  );
};

export default Login;
