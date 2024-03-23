import React from "react";

export default function Input({ placeholder, height, marginBottom, editableClassName }) {
  return (
    <>
      <div>
        <input
          className={`w-full ${height} ${marginBottom} border-[1.5px] border-[#ced4da] px-2 rounded-lg ${editableClassName}`}
          placeholder={placeholder}
          required
        />
      </div>
    </>
  );
}
