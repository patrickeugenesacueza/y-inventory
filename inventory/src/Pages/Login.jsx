import React from "react";
import Input from "../components/Input";
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
        </div>
      </div>
    </>
  );
}
