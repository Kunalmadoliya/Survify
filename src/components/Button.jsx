import React from "react";

const Button = ({
  children,
  type = "button",
  bgColor = "bg-custom-oklch",
  textColor = "text-white",
  className = "",
  ...props
}) => {
  return (
    <button
      className={`px-4 py-3 font-semibold hover: w-full rounded-lg ${bgColor} ${textColor} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
