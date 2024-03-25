import React from "react";
import Input from "../components/Input";
import Button from "../components/Button";
import AccountSeperator from "../components/AccountSeperatorLogin";
import { Link } from "react-router-dom";
export default function Login() {
  return (
    <>
      <div className="h-[90vh] text-center py-[10em] md:pb-[1em] px-[1em] md:px-[15em] lg:px-[20em] xl:px-[30em] 2xl:px-[40em] ">
        <div className="md:border-[1.5px] md:border-[#b8cbd4] md:p-[2em] md:rounded-[1em]">
          <span className="text-center text-3xl">Log in to Y-Inventory</span>
          <Input
            placeholder="sample@email.com"
            editableClassName="h-[5vh] text-blue-500 mt-[2em]"
          />
          <Input
            placeholder="password"
            editableClassName="h-[5vh] text-blue-500 mt-[1em]"
          />
          <Link to="/SignUp">
            <Button
              customClass="w-full h-[6vh] bg-[#2587be] rounded-[2em] text-white font-[500] text-lg mt-[1.5em]"
              buttonName="Submit"
            />
            <AccountSeperator />
            <Button
              customClass="w-1/2 h-[6vh] bg-white rounded-[2em] text-[#2587be] font-[500] text-lg mt-[1em] border-2 border-[#2587be]"
              buttonName="Sign Up"
            />
          </Link>
        </div>
      </div>
    </>
  );
}
