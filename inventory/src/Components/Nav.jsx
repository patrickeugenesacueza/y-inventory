import React from "react";
import NavLogin from "./NavLogin";
import Footer from "./Footer";
import Login from "../pages/Login";

export default function Nav() {
  return (
    <div className="flex flex-col min-h-screen">
      <div>
        <NavLogin />
      </div>
      <div className="flex-grow mt-[10em]">
        <Login />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
