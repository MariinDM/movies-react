const Register = () => {
  return (
    <main className="bg-normal min-h-screen flex items-center justify-center">
      <div className="flex flex-col rounded-lg p-8 w-full max-w-md shadow-darker shadow-xl gap-5">
        <h1 className="text-white text-center text-2xl font-bold">
          Regístrate
        </h1>
        <h4 className="text-white text-center">
          Crea una cuenta para disfrutar de todas las funcionalidades.
        </h4>
        <form>
          <div>
            <input
              type="email"
              id="email"
              className="w-full p-2.5 border border-gray-800 text-white rounded-t-lg "
              placeholder="Correo Electrónico"
            />
          </div>
          <div>
            <input
              type="text"
              id="username"
              className="w-full p-2.5 border border-gray-800 text-white "
              placeholder="Usuario"
            />
          </div>
          <div>
            <input
              type="password"
              id="password"
              className="w-full p-2.5 border border-gray-800 text-white rounded-b-lg "
              placeholder="Contraseña"
            />
          </div>
        </form>
        <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded transition duration-300">
          Regístrate
        </button>
        <p className="text-white text-center">
          ¿Ya tienes una cuenta?{" "}
          <a href="/login" className="text-blue-500 hover:underline">
            Inicia Sesión
          </a>
        </p>
      </div>
    </main>
  );
};

export default Register;
