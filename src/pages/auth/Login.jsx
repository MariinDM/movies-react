const Login = () => {
  return (
    <main className="bg-normal min-h-screen flex items-center justify-center">
      <div className="flex flex-col rounded-lg p-8 w-full max-w-md shadow-darker shadow-xl gap-4">
        <h1 className="text-white text-center text-2xl font-bold">
          Iniciar Sesión
        </h1>

        <h4 className="text-white text-center">
          Bienvenido de nuevo! Por favor, ingresa tus credenciales.
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
              type="password"
              id="password"
              className="w-full p-2.5 border border-gray-800 text-white rounded-b-lg "
              placeholder="Contraseña"
            />
          </div>
        </form>

        <a
          href="/forgot-password"
          className="flex justify-self-end text-blue-500 hover:underline text-sm ml-auto"
        >
          ¿Olvidaste tu contraseña?
        </a>
        <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded transition duration-300">
          Iniciar Sesión
        </button>
        <p className="text-white text-center">
          ¿No tienes una cuenta?{" "}
          <a href="/register" className="text-blue-500 hover:underline">
            Regístrate
          </a>
        </p>
      </div>
    </main>
  );
};

export default Login;
