import React from "react";
import Footer from "./footer/index";
import Header from "./header/index";
import {Home}  from "../../pages/home/home";

export function UserTemplate() {
  return (
    <div className="bg-black">
      <Header />
      <Home/>
      <Footer />
    </div>
  );
}
