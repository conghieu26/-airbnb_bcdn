import * as React from "react";
import { createBrowserRouter } from "react-router-dom";

import { Home } from "../atomic/pages/home/index";
import Login from "../atomic/pages/login/index";
import Register from "../atomic/pages/register/index";
import { RoomDetails } from "../atomic/pages/roomdetails/roomdetails";
import Rooms from "../atomic/pages/rooms/index";
import { UserTemplate } from "../atomic/templates/user/user.template";
import {PersonalPage} from "../atomic/pages/personal/personal"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <UserTemplate />,
    children: [
      { path: "/", element: <Home /> },

      {
        path: "roomdetails",
        element: <RoomDetails />,
      },
    ],
  },
  {
    path: "rooms",
    element: <Rooms />,
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
    path: "personal",
    element: <PersonalPage />,
  },
]);
