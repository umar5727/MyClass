import React from "react";

const Button = ({
  type = "button",
  children = "button",
  className = "hover:text-white",
  // onClick='',
  ...props
}) => {
  return (
    <button
      type={type}
      className={` text-primary flex items-center justify-center py-2 px-6 rounded-lg transition-colors duration-500 ease-in-out border border-primary hover:bg-primary hover:text-black  dark:hover:text-white font-bold ${className}`}
      // onClick={}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
