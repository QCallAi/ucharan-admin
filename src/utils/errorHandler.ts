import Swal from "sweetalert2";
const openNotificationWithIcon = ({ message }: any) => {
  Swal.fire({
    title: "Error",
    text: message,
    icon: "error",
    confirmButtonText: "OK",
  }).then((result: any) => {
    // setIsModalOpen(false);
  });
};

export const errorHandler = (error: any) => {
  if (error.toJSON().message === "Network Error") {
    if (window.navigator.onLine) {
      openNotificationWithIcon({
        message:
          "Oops! something went wrong, we are working on it. Please try after sometime",
      });
    } else {
      openNotificationWithIcon({
        message: "Please check your internet connection",
      });
    }
  } else {
    if (error.response) {
      if (error.response.status === 500) {
        openNotificationWithIcon({ message: "Internal Server Error" });
      }
      if (error.response.status === 401) {
        openNotificationWithIcon({
          message: error.response?.data?.message || "Unauthorized",
        });
        setTimeout(() => {
          localStorage.clear();
          window.location.href = "/";
        }, 500);
      }
      if (error.response.status === 404) {
        openNotificationWithIcon({ message: "Request not found" });
      }
      if (error.response.status === 403) {
        // window.location.href = "/app/error";
      }
    } else {
      openNotificationWithIcon({ message: error.message });
    }
  }
};
