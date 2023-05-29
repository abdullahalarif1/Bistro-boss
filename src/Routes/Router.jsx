import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Pages/Home/Home";
import Menu from "../Pages/Menu/Menu";
import Order from "../Pages/Order/Order";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import Secret from "../Pages/Secret/Secret";
import PrivateRoute from "./PrivateRoute";
import DashBoard from "../Layout/DashBoard";
import MyCart from "../Pages/Dashboard/MyCart";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "menu",
        element: <Menu></Menu>,
      },
      {
        path: "/order/:category",
        element: <Order></Order>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "signUp",
        element: <SignUp></SignUp>,
      },
      {
        path: "secret",
        element: (
          <PrivateRoute>
            <Secret></Secret>
          </PrivateRoute>
        ),
      },
    ],
  },

  //------------------------------
  // dashboard route
  //------------------------------
  {
    path: "dashboard",
    element: <DashBoard></DashBoard>,
    children: [
      {
        path: "myCart",
        element: <MyCart></MyCart>,
      },
    ],
  },
]);

export default router;
