import React from "react";

import {
  FaFacebookSquare,
  FaGithub,
  FaLinkedinIn,
  FaGofore,
} from "react-icons/fa";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <header className="p-4 relative col-start-1 col-end-9  min-h-screen">
      <h1 className="mt-28 text-white font-bold text-3xl">
        turning ideas into marketable
        <span className="text-port-pink mx-2">products </span> is my calling
      </h1>
      <figure className="w-10 h-20 absolute top-3 left-0">
        <img src="/images/hand-left.webp" alt="left hand" />
      </figure>
      <figure className="w-20 h-5 absolute top-2/4 right-0">
        <img src="/images/hand-right.webp" alt="right hand" />
      </figure>
      <div className="mt-26">
        <a className="text-port-gray border-b border-port-gray absolute left-5 top-3/4 font-bold text-sm">
          VIEW PROJECTS
        </a>
      </div>
      <div className="px-2 flex justify-between text-port-gray absolute top-3/4 mt-14 w-full left-0">
        <div className="w-14 h-5 border border-port-pink rounded-full"></div>
        <ul className="flex justify-between w-[150px] item-center">
          <li>
            <a className="" href="https://www.facebook.com/max.dosky">
              <FaFacebookSquare />
            </a>
          </li>
          <li>
            <a
              href="mailto:okaforpatrick302@gmail.com"
              className="text-red-800"
            >
              <FaGofore />
            </a>
          </li>
          <li>
            <a href="https://www.github.com/ChidiPatrick">
              <FaGithub />
            </a>
          </li>
          <li>
            <a
              href="https://www/linkedin.com/in/patrick-chidiebele"
              className="text-blue-800"
            >
              <FaLinkedinIn />
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
