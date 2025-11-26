import axios, { AxiosRequestConfig } from "axios";
import { errorHandler } from "utils/errorHandler";

// API call to fetch the user list
export const getUserList = async () => {
  const baseUrl = process.env.REACT_APP_BASE_URL;
  try {
    const headers = {
      Authorization: "Bearer " + localStorage.getItem("token"),
    };
    const config: AxiosRequestConfig = {
      headers: headers,
    };
    const response = await axios.get(`${baseUrl}/superAdmin/userlist`, config);
    return response.data;
  } catch (error) {
    errorHandler(error);
  }
};

// API call to update user account status
export const updateUserAccountStatus = async (id: any) => {
  const baseUrl = process.env.REACT_APP_BASE_URL;
  try {
    const headers = {
      Authorization: "Bearer " + localStorage.getItem("token"),
    };
    const config: AxiosRequestConfig = {
      headers: headers,
    };
    const response = await axios.put(
      `${baseUrl}/superAdmin/updateUserAccountStatus?id=${id}`,
      null,
      config
    );
    return response.data;
  } catch (error) {
    errorHandler(error);
  }
};

// API call to update user account status
export const updateUserAmount = async (data: any) => {
  const baseUrl = process.env.REACT_APP_BASE_URL;
  try {
    const headers = {
      Authorization: "Bearer " + localStorage.getItem("token"),
    };
    const config: AxiosRequestConfig = {
      headers: headers,
    };
    const response = await axios.post(
      `${baseUrl}/superAdmin/updateUserAmount`,
      data,
      config
    );
    return response.data;
  } catch (error) {
    errorHandler(error);
  }
};

// API call to update per minute price
export const updatePerMinutePrice = async (data: any) => {
  const baseUrl = process.env.REACT_APP_BASE_URL;
  try {
    const headers = {
      Authorization: "Bearer " + localStorage.getItem("token"),
    };
    const config: AxiosRequestConfig = {
      headers: headers,
    };
    const response = await axios.post(
      `${baseUrl}/superAdmin/update-per-minute-price`,
      data,
      config
    );
    return response.data;
  } catch (error) {
    errorHandler(error);
  }
};

// API call to login as
export const loginAsUser = async (data: any) => {
  const baseUrl = process.env.REACT_APP_BASE_URL;
  try {
    const headers = {
      Authorization: "Bearer " + localStorage.getItem("token"),
    };
    const config: AxiosRequestConfig = {
      headers: headers,
    };
    const response = await axios.post(
      `${baseUrl}/superAdmin/accessUserAccount`,
      data,
      config
    );
    return response.data;
  } catch (error) {
    errorHandler(error);
  }
};