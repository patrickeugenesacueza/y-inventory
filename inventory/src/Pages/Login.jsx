import React from "react";
import Input from "../components/Input";
import Button from "../components/Button";
export default function Login() {
  return (
    <>
      <div className="text-center">
        <div className="px-[1em]">
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
            customClass="w-full h-[4vh] bg-[#2587be] rounded-[2em] text-white font-[500] text-lg mt-[1.5em]"
            buttonName="Submit"
          />
          
        </div>
      </div>
    </>
  );
}
