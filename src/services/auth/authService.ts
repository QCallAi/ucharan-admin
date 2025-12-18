import Axios from "utils/axious";

export const loginAdmin = async (data: any) => {
  return await Axios.post("/admin/admin-login", data);
};
