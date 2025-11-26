import InputField from "components/fields/InputField";
import { useState } from "react";

const ResetPassword = () => {
  const [isValid, setIsValid] = useState(false);
  return (
    <div className="mb-16 mt-16 flex h-full w-full items-center justify-center px-2 md:mx-0 md:px-0 lg:mb-10 lg:items-center lg:justify-start">
      {!isValid ? (
        <div className="mt-[10vh] w-full max-w-full flex-col items-center md:pl-4 lg:pl-0 xl:max-w-[420px]">
          <h4 className="mb-2.5 text-4xl font-bold text-navy-700 dark:text-white">
            Reset Password
          </h4>
          <p className="mb-9 ml-1 text-base text-gray-600">
            Enter your email !
          </p>

          <InputField
            variant="auth"
            extra="mb-3"
            label="Email*"
            placeholder="mail@simmmple.com"
            id="email"
            type="text"
          />

          <button
            className="linear mt-2 w-full rounded-xl bg-brand-500 py-[12px] text-base font-medium text-white transition duration-200 hover:bg-brand-600 active:bg-brand-700 dark:bg-brand-400 dark:text-white dark:hover:bg-brand-300 dark:active:bg-brand-200"
            onClick={() => setIsValid(true)}
          >
            Submit
          </button>
        </div>
      ) : (
        <div className="mt-[10vh] w-full max-w-full flex-col items-center md:pl-4 lg:pl-0 xl:max-w-[420px]">
          <h4 className="mb-2.5 text-4xl font-bold text-navy-700 dark:text-white">
            Reset Password
          </h4>
          <p className="mb-9 ml-1 text-base text-gray-600">
            Enter your password !
          </p>

          <InputField
            variant="auth"
            extra="mb-3"
            label="Password*"
            placeholder="Min. 8 characters"
            id="password"
            type="password"
          />

          <InputField
            variant="auth"
            extra="mb-3"
            label="Confirm Password*"
            placeholder="Min. 8 characters"
            id="password"
            type="password"
          />

          <button className="linear mt-2 w-full rounded-xl bg-brand-500 py-[12px] text-base font-medium text-white transition duration-200 hover:bg-brand-600 active:bg-brand-700 dark:bg-brand-400 dark:text-white dark:hover:bg-brand-300 dark:active:bg-brand-200">
            Reset
          </button>
        </div>
      )}
    </div>
  );
};

export default ResetPassword;
