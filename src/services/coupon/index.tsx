import axios, { AxiosRequestConfig } from "axios";
import { errorHandler } from "utils/errorHandler";

// API call to fetch the list of industries
export const getCouponList = async () => {
  const baseUrl = process.env.REACT_APP_BASE_URL;
  try {
    const headers = {
      Authorization: "Bearer " + localStorage.getItem("token"),
    };
    const config: AxiosRequestConfig = {
      headers: headers,
    };
    const response = await axios.get(`${baseUrl}/superadmin/getCoupon`, config);
    return response.data;
  } catch (error) {
    errorHandler(error);
  }
};

// API call to delete an Coupon
export const deleteCoupon = async (id: any) => {
  const baseUrl = process.env.REACT_APP_BASE_URL;
  try {
    const headers = {
      Authorization: "Bearer " + localStorage.getItem("token"),
    };
    const config: AxiosRequestConfig = {
      headers: headers,
    };
    const response = await axios.delete(
      `${baseUrl}/superadmin/deleteCoupon?id=${id}`,
      config
    );
    return response.data;
  } catch (error) {
    errorHandler(error);
  }
};

// API call to create a new Coupon
export const createCoupon = async (CouponData: any) => {
  const baseUrl = process.env.REACT_APP_BASE_URL;
  try {
    const headers = {
      Authorization: "Bearer " + localStorage.getItem("token"),
    };
    const config: AxiosRequestConfig = {
      headers: headers,
    };
    const response = await axios.post(
      `${baseUrl}/superadmin/createCoupon`,
      CouponData,
      config
    );
    return response.data;
  } catch (error) {
    errorHandler(error);
  }
};

// API call to update Coupon details
export const updateCouponDetails = async (updatedData: any, id: any) => {
  const baseUrl = process.env.REACT_APP_BASE_URL;
  try {
    const headers = {
      Authorization: "Bearer " + localStorage.getItem("token"),
    };
    const config: AxiosRequestConfig = {
      headers: headers,
    };
    const response = await axios.put(
      `${baseUrl}/superadmin/updateCoupon?id=${id}`,
      updatedData,
      config
    );
    return response.data;
  } catch (error) {
    errorHandler(error);
  }
};
