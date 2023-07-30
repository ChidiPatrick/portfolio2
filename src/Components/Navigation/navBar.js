import React from "react";

import { HiMenu, HiOutlineMenu } from "react-icons/hi";

const NavBar = () => {
  return (
    <nav className="z-200  col-start-1 col-end-9 abosolute top-0 left-0  h-14 border border-gray-600 rounded-md bg-port-primary flex justify-between  mx-auto w-full">
      <div className="p-2 text-port-gray flex justify-center items-center flex-col ">
        name logo
      </div>
      <div className="text-port-gray flex justify-center items-center flex-col ">
        <span>Patrick Chidi</span>
      </div>
      <div className="text-port-gray w-20 flex justify-center items-center">
        <HiOutlineMenu className="text-[30px] " />
      </div>
    </nav>
  );
};

export default NavBar;
