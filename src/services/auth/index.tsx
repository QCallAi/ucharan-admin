import axios from "axios";
import { errorHandler } from "utils/errorHandler";

// API call to authenticate and login
export const LoginApi = async (credentials: any) => {
  // const baseUrl = process.env.REACT_APP_BASE_URL;
  // try {
  //   const response = await axios.post(
  //     `${baseUrl}/superAdmin/login`,
  //     credentials
  //   );
  //   return response.data;
  // } catch (error) {
  //   errorHandler(error);
  // }
  return {
    success: true,
    message: "Logged in (static mock response)",
    data: {
      token:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiIzZDYxYjE0Ny1jMDM2LTRkNzMtYWM2OS1kZjAyNmI0OGRmMGYiLCJtb2JpbGVOdW1iZXIiOiI5ODc2IiwiaWF0IjoxNzY0MDUwNzU4LCJleHAiOjE3NjQwNTE2NTh9.vZ29Oxq_JFlSwmjnA8ny8YAozcSzrQpjd9cIxaHpcYo",
    },
  };
};
