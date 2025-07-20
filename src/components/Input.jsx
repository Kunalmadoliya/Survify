import {useId} from "react";

const Input = ({
  label,
  type = "text",
  placeholder,
  icon,
  className = "",
  ...props
}) => {
  const id = useId();

  return (
    <div className="relative">
      {label && (
        <label htmlFor={id} className="sr-only">
          {label}
        </label>
      )}
      <span className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
        {icon}
      </span>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        className={`w-full py-2 px-10 rounded-lg bg-transparent border border-gray-600 focus:border-green-500 outline-none  duration-300 ${className}`}
        {...props}
      />
    </div>
  );
};

export default Input;
