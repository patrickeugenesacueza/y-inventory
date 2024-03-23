import React from "react";

export default function Input({ placeholder, editableClassName }) {
  return (
    <>
      <div>
        <input
          className={`w-full h-5vh border-[1.5px] border-[#ced4da] px-2 rounded-lg ${editableClassName}`}
          placeholder={placeholder}
          required
        />
      </div>
    </>
  );
}
