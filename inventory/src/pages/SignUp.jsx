import React, { useState } from "react";
import Input from "../components/Input";
import Button from "../components/Button";
import AccountSeperator from "../components/AccountSeperatorSignUp";
import { Link } from "react-router-dom";
import {auth} from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import toast, { Toaster } from "react-hot-toast";


export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const notify = () => toast.success("Successfuly Created Account");

  const signUp = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) =>{
        console.log(userCredential);
        notify();
    })
    .catch((error) => {
        console.log(error);
    })
};


  return (
    <>
      <div className="h-[90vh] text-center py-[10em] md:pb-[1em] px-[1em] md:px-[15em] lg:px-[20em] xl:px-[30em] 2xl:px-[40em] ">
        <div className="md:border-[1.5px] md:border-[#dcdedf] md:p-[2em] md:rounded-[1em]">
          <span className="text-center text-3xl">Sign up to Y-Inventory</span>
          <form onSubmit={signUp}>
            <Input
              placeholder="sample@email.com"
              editableClassName="h-[5vh] mt-[2em]"
              value={email}
              onChange = {(e) => setEmail(e.target.value)}
              type="text"
            />
            <Input
              placeholder="password"
              editableClassName="h-[5vh] mt-[1em]"
              value={password}
              onChange = {(e) => setPassword(e.target.value)}
              type="password"
            />
            <Input
              placeholder="retype password"
              editableClassName="h-[5vh] mt-[1em]"
              type="password"
            />
            {/* <Link to="/"> */}
              <Button
                customClass="w-full h-[6vh] bg-[#2587be] rounded-[2em] text-white font-[500] text-lg mt-[1.5em]"
                buttonName="Submit"
                type="submit"
              />
              <AccountSeperator />
              <Link to="/">
              <Button
                customClass="w-1/2 h-[6vh] bg-white rounded-[2em] text-[#2587be] font-[500] text-lg mt-[1em] border-2 border-[#2587be]"
                buttonName="Sign In"
                
              />
              <Toaster position="bottom-center" reverseOrder={false} />
            </Link>
          </form>
        </div>
      </div>
    </>
  );
}
