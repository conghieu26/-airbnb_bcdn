import React from "react";

import { Outlet } from "react-router-dom";
import Footer from "../../components/footer/index";
import Header from "./header/index";

export function UserTemplate() {
  return (
    <div className="bg-black">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}
