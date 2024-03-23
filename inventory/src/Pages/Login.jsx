import React from "react";
import Input from "../components/Input";
import Button from "../components/Button";
import AccountSeperator from "../components/AccountSeperatorLogin";
export default function Login() {
  return (
    <>
      <div className="text-center px-[1em]">
        <div className="">
          <span className="text-center text-3xl">Log in to Y-Inventory</span>
          <Input
            placeholder="sample@email.com"
            editableClassName="h-[5vh] text-blue-500 mt-[2em]"
          />
          <Input
            placeholder="password"
            editableClassName="h-[5vh] text-blue-500 mt-[1em]"
          />
          <Button
            customClass="w-full h-[6vh] bg-[#2587be] rounded-[2em] text-white font-[500] text-lg mt-[1.5em]"
            buttonName="Submit"
          />
        </div>
        <AccountSeperator/>
        <Button
           customClass="w-1/2 h-[6vh] bg-white rounded-[2em] text-[#2587be] font-[500] text-lg mt-[1em] border-2 border-[#2587be]"
          buttonName="Sign Up"
        />
      </div>
    </>
  );
}
