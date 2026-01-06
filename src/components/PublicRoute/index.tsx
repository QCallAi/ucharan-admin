
import { Navigate } from "react-router-dom";

const PublicRoute = ({ children }: any) => {
  const token = localStorage.getItem("token");
  if (token) {
    return <Navigate to="/admin/user-list" />;
  }
  return children;
};

export default PublicRoute;
