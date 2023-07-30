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
      className={
        displayMenu === true
          ? "bg-blue-300 col-start-1 col-end-9 bg-opacity-10 w-full h-screen relative p-2"
          : null
      }
    >
      <ul
        className={
          displayMenu === true
            ? "bg-black text-port-gray absolute top-0 right-0 h-[200px] w-[200px]"
            : null
        }
      >
        <li
          className="p-2 my-2 text-port-gray"
          onClick={() => toggleMenu(dispatch, hideMenu)}
        >
          <a>X</a>
        </li>
        <li className="p-2 my-2 text-port-gray">
          <a>Projects</a>
        </li>
        <li className="p-2 my-2 text-port-gray">
          <a>Contact me</a>
        </li>
        <li className="p-2 my-2 text-port-gray">
          <a>About me</a>
        </li>
        <li className="p-2 my-2 text-port-gray">
          <a>Comments</a>
        </li>
      </ul>
    </div>
  );
}

export default Menu;
