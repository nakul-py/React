import React, { useId } from "react";

const Input = React.forwardRef(function Input(
  { label, type = "text", className = "", children, ...props },
  ref
) {
  const id = useId();

  return (
    <div className="w-full">
      {" "}
      {label && (
        <label className="inline-block mb-1 pl-1 px-2 py-4" htmlFor="id">
          {" "}
          {label}{" "}
        </label>
      )}
      <input
        type={type}
        className={`px-3 py-2 rounded-lg
               bg-white text-black outline-none
               focus:bg-gray-600 duration-100 border 
               border-gray-200 w-full 
                ${className}`}
        ref={ref}
        {...props}
        id={id}
      />
      <div className="absolute top-1/1 -translate-y-1/1 text-xl cursor-pointer">{children}</div>
    </div>
  );
});

export default Input;
