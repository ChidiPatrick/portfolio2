import React from "react";

import { toggleMenu } from "./menu.handler";
import { useDispatch, useSelector } from "react-redux";
import { showMenu, hideMenu } from "./menu.slice";

function Menu() {
  const dispatch = useDispatch();

  const displayMenu = useSelector((state) => state.menuSlice.displayMenu);
  console.log(displayMenu);
  return (
    <div
      onClick={() => toggleMenu(dispatch, hideMenu)}
      className={
        displayMenu === true
          ? "col-start-1 col-end-9 z-300 bg-black w-full h-screen absolute left-0, top-0 p-2"
          : null
      }
    >
      <ul
        className={
          displayMenu === true
            ? " z-1000 text-port-gray bg-opacity-60 bg-[#252525] absolute top-[1px] right-[2px] h-[250px] w-full"
            : null
        }
      >
        <li
          className="p-2 my-2 text-port-gray flex justify-start"
          onClick={() => toggleMenu(dispatch, hideMenu)}
        >
          <a>X</a>
        </li>
        <li className="p-2 flex justify-end text-port-pink  my-2 text-port-gray">
          <a>Projects</a>
        </li>
        <li className="p-2 flex justify-end text-port-pink  my-2 text-port-gray">
          <a>Contact me</a>
        </li>
        <li className="p-2 flex justify-end text-port-pink  my-2 text-port-gray">
          <a>About me</a>
        </li>
        <li className="p-2 flex justify-end text-port-pink  my-2 text-port-gray">
          <a>Comments</a>
        </li>
      </ul>
    </div>
  );
}

export default Menu;
