import React from "react";
import { Field, ErrorMessage } from "formik";

interface InputFieldProps {
  name: string;
  label?: string;
  placeholder?: string;
  type?: string;
}

const InputField = ({
  name,
  label,
  placeholder,
  type = "text",
}: InputFieldProps) => {
  return (
    <div className="mb-3 flex flex-col">
      {label && (
        <label
          htmlFor={name}
          className="mb-1 text-sm font-medium text-gray-700 dark:text-white"
        >
          {label}
        </label>
      )}

      <Field
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        className="
          rounded 
          border 
          bg-white 
          p-2 
          text-navy-700 
          outline-none 
          focus:border-[#36c8ff] 
          focus:ring-2

          focus:ring-[#36c8ff]
          dark:bg-navy-800
          dark:text-white
        "
      />

      <ErrorMessage
        name={name}
        component="div"
        className="mt-1 text-xs text-red-500"
      />
    </div>
  );
};

export default InputField;
