import React, { useState } from "react";
import { Field } from "formik";
import { HiEye, HiEyeOff } from "react-icons/hi";

function InputField(props: {
  id: string;
  label?: string;
  extra: string;
  placeholder: string;
  variant: string;
  name?: string;
  type: any;
  disabled?: any;
  state?: any;
}) {
  const {
    label,
    id,
    extra,
    placeholder,
    variant,
    name,
    type,
    disabled,
    state,
  } = props;

  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className={`${extra}`}>
      {label && (
        <label
          htmlFor={id}
          className={`text-sm text-navy-700 dark:text-white ${
            variant === "auth" ? "ml-1.5 font-medium" : "ml-3 font-bold"
          }`}
        >
          {label}
        </label>
      )}
      <Field name={name}>
        {({ field, meta }: { field: any; meta: any }) => (
          <>
            <div className="relative">
              <input
                disabled={disabled}
                {...field}
                type={showPassword ? "text" : type}
                id={id}
                placeholder={placeholder}
                className={`mt-2 flex h-12 w-full items-center justify-center rounded border bg-white/0 p-3 text-sm outline-none ${
                  disabled === true
                    ? "!border-none !bg-gray-100 dark:!bg-white/5 dark:placeholder:!text-[rgba(255,255,255,0.15)]"
                    : meta.error && meta.touched
                    ? "border-red-500 text-red-500 placeholder:text-red-500 dark:!border-red-400 dark:!text-red-400 dark:placeholder:!text-red-400"
                    : state === "success"
                    ? "border-green-500 text-green-500 placeholder:text-green-500 dark:!border-green-400 dark:!text-green-400 dark:placeholder:!text-green-400"
                    : "border-gray-200 dark:!border-white/10 dark:text-white"
                }`}
              />
              {type === "password" && ( // Show icon for toggling password visibility
                <button
                  type="button"
                  className="absolute right-2 top-1/2 -translate-y-1/2 transform"
                  onClick={togglePasswordVisibility}
                >
                  {showPassword ? (
                    <HiEyeOff className="text-[#aeacac]" />
                  ) : (
                    <HiEye className="text-[#aeacac]" />
                  )}
                </button>
              )}
            </div>
            {meta.error && meta.touched && (
              <div className="error text-sm text-red-500">{meta.error}</div>
            )}
          </>
        )}
      </Field>
    </div>
  );
}

export default InputField;
