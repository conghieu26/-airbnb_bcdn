import * as React from "react";
import { createBrowserRouter } from "react-router-dom";

import Login from "../atomic/pages/login/index";
import Register from "../atomic/pages/register/index";
import RoomDetail from "../atomic/pages/rooms/index";
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
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "/rooms",
    element: <RoomDetail />,
  },
]);
