import React, { useEffect, useState } from "react";

import {
  useAnimate,
  motion,
  AnimatePresence,
  usePresence,
} from "framer-motion";

import { toggleMenu } from "./menu.handler";
import { useDispatch, useSelector } from "react-redux";
import { showMenu, hideMenu } from "./menu.slice";

function Menu() {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);

  const [isPresent, safeToRemove] = usePresence();
  const [scope, animate] = useAnimate();

  useEffect(() => {}, []);

  const displayMenu = useSelector((state) => state.menuSlice.displayMenu);

  return (
    <AnimatePresence>
      <motion.div
        animate={{ opacity: 1 }}
        transition={{ duration: 0.2, delay: 0.02 }}
        onClick={() => toggleMenu(dispatch, hideMenu)}
        initial={{ opacity: 0 }}
        exit={{ width: 0, height: 0, opacity: 0 }}
        className={
          displayMenu === true
            ? "col-start-1 col-end-9 z-300 bg-black w-full h-screen absolute left-0, top-0 p-2"
            : null
        }
      >
        <motion.ul
          animate={{
            width: "100%",
            height: "100%",
            transition: { duration: 0.3 },
          }}
          ref={scope}
          className={
            displayMenu === true
              ? " text-port-gray bg-opacity-60 bg-[#252525] absolute top-[1px] right-[2px] h-[250px] "
              : null
          }
        >
          <motion.li
            className="p-2 my-2 text-port-gray flex justify-end"
            onClick={() => toggleMenu(dispatch, hideMenu)}
          >
            <a>X</a>
          </motion.li>
          <li className="p-2 flex justify-center my-2 text-port-gray text-xl">
            <a href="#projects">Projects</a>
          </li>
          <li className="p-2 flex justify-center my-2 text-port-gray text-xl">
            <a href="#contact_me">Contact me</a>
          </li>
          <li className="p-2 flex justify-center my-2 text-port-gray text-xl">
            <a href="#reviews">Reviews</a>
          </li>
        </motion.ul>
      </motion.div>
    </AnimatePresence>
  );
}

export default Menu;
