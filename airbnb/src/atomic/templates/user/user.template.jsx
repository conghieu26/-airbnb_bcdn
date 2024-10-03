import React from "react";

import Footer from "../../components/footer/index";
import { Home } from "../../pages/home/home";
import Header from "./header/index";

export function UserTemplate() {
  return (
    <div className="bg-black">
      <Header />
      <Home />
      <Footer />
    </div>
  );
}
