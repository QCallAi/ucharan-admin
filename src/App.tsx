import { Navigate, createBrowserRouter, RouterProvider } from "react-router-dom";
import { lazy, Suspense } from "react";
import PublicRoute from "components/PublicRoute";
import ProtectedRoute from "components/ProtectedRoute";
import Login from "views/auth/logIn";

const AdminLayout = lazy(() => import('layouts/admin'));

const router = createBrowserRouter([
  {
    path: "auth/login",
    element: <PublicRoute><Login /></PublicRoute>,
  },
  {
    path: "admin/*",
    element: <ProtectedRoute><AdminLayout /></ProtectedRoute>,
  },
  {
    path: "/",
    element: <Navigate to="/admin/user-list" replace />,
  },
]);

const App = () => {
  return (
    <Suspense fallback={<div></div>}>
      <RouterProvider router={router} />
    </Suspense>
  );
};

export default App;
