import React from "react";
import Icon from "../assets/icon.png";

export default function NavLogin() {
  return (
    <>
      <nav className="h-[12vh] w-full px-[1em] fixed bg-white">
        <div class="flex h-full w-full justify-center items-center cursor-pointer md:items-start md:justify-start">
          <img src={Icon}/>
        </div>
      </nav>
    </>
  );
}
