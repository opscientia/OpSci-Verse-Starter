import { useRoutes, Navigate, BrowserRouter } from "react-router-dom";

// layout
import { MainLayout, AuthLayout } from "../features/layouts";
// pages
import Home from "../pages/Home";
import About from "../pages/About";
import NotFound from "../pages/404";
import Signin from "../pages/Signin";
import Signup from "../pages/Signup";

// ----------------------------------------------------------------------

function Routes() {
  return useRoutes([
    {
      path: "*",
      children: [
        { path: "404", element: <NotFound /> },
        { path: "*", element: <Navigate to="/404" replace /> },
      ],
    },
    {
      path: "/",
      element: <MainLayout />,
      children: [
        { path: "", element: <Home /> },
        { path: "about", element: <About /> },
      ],
    },

    {
      path: "/auth",
      element: <AuthLayout />,
      children: [
        { path: "signin", element: <Signin /> },
        { path: "signup", element: <Signup /> },
      ],
    },
  ]);
}
function Router() {
  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  );
}
export default Router;
