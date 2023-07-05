import { Navigate, useRoutes } from "react-router-dom";
import HomeLayout from "./pages/HomeLayout";
import LoginPage from "./pages/LoginPage";
import Page404 from "./pages/Page404";
import Dashboard from "./pages/dashboard/Dashboard";
import RegisterUserPage from "./pages/uploadDocument/RegisterUser";

export default function Router() {
  const routes = useRoutes([
    {
      path: "login",
      element: <LoginPage />,
    },
    {
      path: "/suchi",
      element: <HomeLayout />,
      children: [
        { element: <Navigate to="/suchi/home" />, index: true },
        { path: "home", element: <Dashboard /> },
        { path: "/suchi/register-User", element: <RegisterUserPage /> },
        {
          path: "*",
          element: <Page404 />,
        },
      ],
    },
    {
      path: "register-user",
      element: <RegisterUserPage />,
    },
    {
      path: "*",
      element: <Page404 />,
    },
  ]);

  return routes;
}
