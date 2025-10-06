import { useState } from "react";
import { Link } from "react-router-dom";
import Input from "../../components/Input";
import Button from "../../components/Button";

const Register = () => {
  const [formData, setFormData] = useState({
    email: "",
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted: ", formData);
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
        <form onSubmit={handleSubmit}>
          <div>
            <Input
              type="email"
              name="email"
              placeholder="Correo Electrónico"
              className="rounded-t-lg"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <Input
              type="text"
              name="username"
              placeholder="Usuario"
              className="rounded-none"
              value={formData.username}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <Input
              type="password"
              name="password"
              placeholder="Contraseña"
              className="rounded-b-lg"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <Button
            type="submit"
            className="mt-4"
            disabled={
              !formData.email || !formData.username || !formData.password
            }
          >
            Regístrate
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
