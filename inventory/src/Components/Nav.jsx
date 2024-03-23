import React from "react";
import HeaderLogin from "./HeaderLogin";
import Footer from "./Footer";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";

export default function Nav() {
  return (
    <div className="flex flex-col min-h-screen">
      <div>
        <HeaderLogin />
      </div>
      <div className="flex-grow mt-[10em]">
        <Login />
        {/* <SignUp /> */}
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
