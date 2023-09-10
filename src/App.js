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
        {/* <figure className="w-[50px] h-[50px] border border-port-gray rounded-full">
          <img
            src="images/skalo.jpg"
            className="w-[100%] h-[100%] border border-transparent rounded-full"
          />
        </figure> */}
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
    <div className="bg-black w-[full] relative p-2 font-sans-apple-system min-h-screen ">
      <header className="p-2 z-1000 relative col-start-1 col-end-9  min-h-screen">
        <div className=" fixed top-5 left-5 right-5">
          {largeScreen === true ? largeNav : <NavBar />}
        </div>
        <h1 className="mt-[180px] md:w-[70%] md:text-4xl lg:text-5xl sl:w-[700px] lg:w-[900px] lg:px-[50px] sm:w-[80%] sm:mx-auto p-2 w-full h-[200px] small:w-[90%] small:mx-auto text-white font-bold text-3xl">
          turning ideas into marketable
          <span className="text-transparent bg-clip-text mx-2 bg-gradient-to-r from-purple-700 via-purple-400 to-purple-200">
            products
          </span>
          is my calling
        </h1>
        <figure className="w-10 h-20 absolute top-[15%] left-0">
          <img src="/images/hand-left.webp" alt="left hand" />
        </figure>
        <figure className="w-20 h-5 absolute top-2/4 right-0">
          <img src="/images/hand-right.webp" alt="right hand" />
        </figure>
        <div className=" w-full h-[20px] mt-26">
          <div className=" w-full">
            <a className="md:ml-[50px] lg:ml-[100px] text-port-gray border-b border-port-gray absolute left-5 top-3/4 font-bold text-sm">
              VIEW PROJECTS
            </a>
          </div>
        </div>
        <div className="md:px-[50px] lg:px-[100px]  px-2 flex flex-col justify-between text-port-gray absolute top-3/4 mt-14 w-full left-0">
          <div className="flex justify-between px-4">
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
        </div>
      </header>
      <Main />
      <Comments />
      <ContactMe />
    </div>
  );
}

export default App;
