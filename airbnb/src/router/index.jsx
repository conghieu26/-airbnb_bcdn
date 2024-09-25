import * as React from "react";
import { createBrowserRouter } from "react-router-dom";
import { UserTemplate } from "../atomic/templates/user/user.template";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <UserTemplate />,
  },
]);
