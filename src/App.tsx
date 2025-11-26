import { Navigate, createBrowserRouter, RouterProvider } from "react-router-dom";
import { lazy, Suspense } from "react";

const AdminLayout = lazy(() => import('layouts/admin'));
const AuthLayout = lazy(() => import('layouts/auth'));

const router = createBrowserRouter([
  {
    path: "auth/*",
    element: <AuthLayout />,
  },
  {
    path: "admin/*",
    element: <AdminLayout />,
  },
  {
    path: "/",
    element: <Navigate to="/auth" replace />,
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
