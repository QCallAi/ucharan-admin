/* eslint-disable react-hooks/exhaustive-deps */
import InputField from "components/fields/InputField";
import { useNavigate } from "react-router-dom";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import { useToast } from "@chakra-ui/react";

import { Checkbox } from "@chakra-ui/react";
import { useEffect } from "react";
// import { LoginApi } from "services/auth";
//"services/auth";

const Login = () => {
  const navigate = useNavigate();
  const toast = useToast();

  const initialValues = {
    login_email: "",
    login_password: "",
  };

  const validationSchema = Yup.object().shape({
    login_email: Yup.string()
      .email("Invalid email")
      .matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Invalid email")
      .required("Email is required"),
    login_password: Yup.string().required("Password field can not be empety"),
  });

  const handleSignIn = (values: any) => {
    // let signInPayload = {
    //   email: values.login_email,
    //   password: values.login_password,
    // };
    // LoginApi(signInPayload)
    //   .then((response) => {
    //     // if (response.success) {
    //     localStorage?.setItem(
    //       "token",
    //       "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiIzZDYxYjE0Ny1jMDM2LTRkNzMtYWM2OS1kZjAyNmI0OGRmMGYiLCJtb2JpbGVOdW1iZXIiOiI5ODc2IiwiaWF0IjoxNzY0MDUwNzU4LCJleHAiOjE3NjQwNTE2NTh9.vZ29Oxq_JFlSwmjnA8ny8YAozcSzrQpjd9cIxaHpcYo"
    //     );
    //     // toast({
    //     //   description: response?.message,
    //     //   status: "success",
    //     //   duration: 8000,
    //     //   isClosable: true,
    //     //   position: "top-left",
    //     // });
    //     // navigate("/admin/user-list");
    //     // } else {
    //     //   toast({
    //     //     description: response?.message,
    //     //     status: "info",
    //     //     duration: 8000,
    //     //     isClosable: true,
    //     //     position: "top-left",
    //     //   });
    //     // }
    //   })
    //   .catch((error) => {
    //     console.error("Error submitting feedback:", error);
    //   });
    console.log("Handling Sign In");
    localStorage.setItem(
      "token",
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiIzZDYxYjE0Ny1jMDM2LTRkNzMtYWM2OS1kZjAyNmI0OGRmMGYiLCJtb2JpbGVOdW1iZXIiOiI5ODc2IiwiaWF0IjoxNzY0MDUwNzU4LCJleHAiOjE3NjQwNTE2NTh9.vZ29Oxq_JFlSwmjnA8ny8YAozcSzrQpjd9cIxaHpcYo"
    );

    toast({
      description: "Logged in (static token)",
      status: "success",
      duration: 3000,
      isClosable: true,
      position: "top-left",
    });

    navigate("/admin/user-list");
  };
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (token) {
      navigate("/admin/user-list");
    }
  }, []);
  console.log("Rerendering Login Component");
  return (
    <div className="flex h-full w-full flex-col items-center justify-center px-2 md:mx-0 md:px-0 lg:mb-10 lg:items-center lg:justify-start">
      <div className="mt-[10vh] w-full max-w-full flex-col items-center md:pl-4 lg:pl-0 xl:max-w-[420px]">
        <h4 className="mb-2.5 text-4xl font-bold text-navy-700 dark:text-white">
          Sign In
        </h4>
        <p className="mb-9 ml-1 text-base text-gray-600">
          Enter your email and password to sign in!
        </p>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={(values: any) => {
            handleSignIn(values);
          }}
        >
          <Form>
            <InputField
              variant="auth"
              name="login_email"
              id="login_email"
              extra="mb-3"
              label="Email*"
              placeholder="mail@simmmple.com"
              type="text"
            />

            <InputField
              variant="auth"
              name="login_password"
              extra="mb-3"
              label="Password*"
              placeholder="Min. 8 characters"
              id="login_password"
              type="password"
            />
            <div className="mb-4 flex items-center justify-between px-2">
              <div className="flex items-center">
                <Checkbox />
                <p className="ml-2 text-sm font-medium text-navy-700 dark:text-white">
                  Keep me logged In
                </p>
              </div>
              {/* <Link to="/auth/reset-password">Forgot Password?</Link> */}
            </div>
            <button
              type="submit"
              className="linear mt-2 w-full rounded bg-blue-700 py-[12px] text-base font-medium text-white transition duration-200 hover:bg-blue-800 active:bg-blue-800"
            >
              Sign In
            </button>
          </Form>
        </Formik>

        {/* <div className="mt-4 flex items-center">
          <span className="text-sm font-medium text-navy-700 dark:text-gray-600">
            Not registered yet?
          </span>
          <Link
            to="/auth/sign-up"
            className="ml-1 text-navy-700 dark:text-gray-600"
          >
            Create an account
          </Link>
        </div> */}
      </div>
    </div>
  );
};

export default Login;
