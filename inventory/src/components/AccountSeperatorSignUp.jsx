import React from "react";

export default function AccountSeperator(props) {
  return (
    <>
      <div className="flex justify-center items-center mt-[5em]">
        <hr className="mt-[2em] w-1/4 h-10 mr-5 border-t-1 border-black" />
        <span className="cursor-pointer text-[#8a9093]">
          Already have an account?
        </span>
        <hr className="mt-[2em] w-1/4 h-10 ml-5 border-t-1 border-black" />
      </div>
    </>
  );
}