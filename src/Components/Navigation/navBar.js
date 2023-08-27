import React, { useState } from "react";

import { HiMenu, HiOutlineMenu } from "react-icons/hi";

import { toggleMenu } from "../menu/menu.handler";
import Menu from "../menu/menu";
import { useDispatch, useSelector } from "react-redux";
import { showMenu, hideMenu } from "../menu/menu.slice";

const NavBar = () => {
  const dispatch = useDispatch();

  const displayMenu = useSelector((state) => state.menuSlice.displayMenu);

  return (
    <div className="relative w-[100%]  z-300">
      <nav
        className={
          "  col-start-1 col-end-9  h-14 border border-gray-600 rounded-md bg-port-primary flex justify-between  mx-auto w-full"
        }
      >
        <div className="p-2 w-[50px] text-port-gray flex justify-center items-center flex-col ">
          <div className="grid gap-x-[2px] gap-y[0]  grid-cols-2">
            {`<PC/>`}
          </div>
        </div>
        <div className="text-port-gray flex justify-center items-center flex-col ">
          <span>Patrick Chidi</span>
        </div>
        <div
          className="text-port-gray w-20 flex justify-center items-center"
          onClick={() => toggleMenu(dispatch, showMenu)}
        >
          <HiOutlineMenu className="text-[30px] " />
        </div>
      </nav>
      {displayMenu === true ? <Menu /> : null}
    </div>
  );
};

export default NavBar;
