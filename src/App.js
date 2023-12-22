import { useState, useRef, useEffect } from "react";

// Third Party Imports ////////////
import useMediaQuery from "react-hook-media-query";
import Marquee from "react-fast-marquee";

//// Local directory imports ///////////
import Header from "./Components/Header/header";
import Main from "./Components/Main/main";
import Comments from "./Components/Comments/comments";
import NavBar from "./Components/Navigation/navBar";
import Menu from "./Components/menu/menu";
import { hideMenu, showMenu } from "./Components/menu/menu.slice";
import { useDispatch } from "react-redux";
import { toggleMenu } from "./Components/menu/menu.handler";
import { useSelector } from "react-redux";
import { HiMenu, HiOutlineMenu } from "react-icons/hi";
import {
  FaFacebookSquare,
  FaGithub,
  FaLinkedinIn,
  FaGofore,
} from "react-icons/fa";
import ContactMe from "./Components/contact me/contactMe";
import { Link } from "react-scroll";
import styles from "./Components/styles/header.css";
import HeroSction from "./Components/Hero section/hero.section";

function App() {
  const dispatch = useDispatch();

  const largeScreen = useMediaQuery("(min-width: 1000px)");
  console.log(largeScreen);

  const userData = [
    { name: "Urch", age: 34 },
    { name: "Obi", age: 30 },
  ];

  const displayMenu = useSelector((state) => state.menuSlice.displayMenu);

  const largeNav = (
    <div className="relative w-[100%] z-300">
      <nav className=" h-14 border border-gray-600 rounded-md bg-port-primary flex justify-between p-2 items-center  mx-auto w-full">
        <div className="text-port-gray">{`<PC/>`}</div>
        <div className="text-port-gray flex justify-center items-center flex-col ">
          <Marquee className="w-[300px]">
            <span className="w-[300px]">Patrick Chidi</span>
          </Marquee>
        </div>
        <ul className="text-port-gray flex justify-between w-[50%]">
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contactMe">Contact me</a>
          </li>
          <li>
            <a href="#comments">Comments</a>
          </li>
          <li>
            <a href="#aboutMe">About me</a>
          </li>
        </ul>
      </nav>
    </div>
  );

  return (
    <div className="hero w-[full] relative p-2 font-sans-apple-system min-h-screen ">
      <HeroSction />
      <Main />
      <Comments />
      <div className="pt-[30px]">
        <ContactMe />
      </div>
      {displayMenu === true ? <Menu /> : null}
    </div>
  );
}

export default App;
