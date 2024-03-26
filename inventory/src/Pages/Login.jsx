import React, { useState } from "react";
import Input from "../components/Input";
import Button from "../components/Button";
import AccountSeperator from "../components/AccountSeperatorLogin";
import { Link } from "react-router-dom";
import {auth} from "../firebase";
import { signInWithCredential, signInWithEmailAndPassword } from "firebase/auth";


export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = (e) => {
      e.preventDefault();
      signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) =>{
        console.log(userCredential);
      })
      .catch((error) => {
        console.log(error);
      })
  };

  return (
    <>
      <div className="h-[90vh] text-center py-[10em] md:pb-[1em] px-[1em] md:px-[15em] lg:px-[20em] xl:px-[30em] 2xl:px-[40em] ">
        <div className="md:border-[1.5px] md:border-[#b8cbd4] md:p-[2em] md:rounded-[1em]">
          <span className="text-center text-3xl">Log in to Y-Inventory</span>
          <form onSubmit={signIn}>
            <Input
              placeholder="sample@email.com"
              editableClassName="h-[5vh] mt-[2em]"
              value={email}
              onChange = {(e) => setEmail(e.target.value)}
              type="email"
              required
            />
            <Input
              placeholder="password"
              editableClassName="h-[5vh] mt-[1em]"
              value={password}
              onChange = {(e) => setPassword(e.target.value)}
              type="password"
              required
            />
            
              <Button
                customClass="w-full h-[6vh] bg-[#2587be] rounded-[2em] text-white font-[500] text-lg mt-[1.5em]"
                buttonName="Submit"
                type="Submit"
              />
              <AccountSeperator />
              <Link to="/SignUp">
              <Button
                customClass="w-1/2 h-[6vh] bg-white rounded-[2em] text-[#2587be] font-[500] text-lg mt-[1em] border-2 border-[#2587be]"
                buttonName="Sign Up"
              />
            </Link>
          </form>
        </div>
      </div>
    </>
  );
}
