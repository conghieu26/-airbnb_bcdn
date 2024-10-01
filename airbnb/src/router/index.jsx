import * as React from "react";
import { createBrowserRouter } from "react-router-dom";

import Register from "../atomic/pages/register/index";
import Login from "../atomic/pages/login/index";
import { UserTemplate } from "../atomic/templates/user/user.template";


export const router = createBrowserRouter([
 
  {
    path: "/",
    element: <UserTemplate />,
  },
  {
    path: "register",
    element: <Register />,
  },
  ,
  {
    path: "login",
    element: <Login />,
  },
]);
