const Input = ({
  type = "text",
  name,
  placeholder,
  value,
  onChange,
  className = "",
  required = false,
}) => {
  return (
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      required={required}
      className={`w-full p-2.5 border border-gray-800 text-white 
                  bg-gray-900 focus:outline-none 
                  placeholder:text-gray-500 ${className}`}
    />
  );
};

export default Input;
