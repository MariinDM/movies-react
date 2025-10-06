const Button = ({
  type = "button",
  children,
  onClick,
  className = "",
  variant = "primary",
  disabled = false,
}) => {
  const baseStyles =
    "w-full py-2 px-4 rounded transition duration-300 font-medium";

  const variants = {
    primary:
      "bg-blue-600 hover:bg-blue-700 text-white disabled:bg-blue-300/50 disabled:cursor-not-allowed",
    secondary:
      "bg-gray-600 hover:bg-gray-700 text-white disabled:bg-gray-400 disabled:cursor-not-allowed",
    light:
      "bg-light hover:bg-opacity-90 text-white disabled:opacity-50 disabled:cursor-not-allowed",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
