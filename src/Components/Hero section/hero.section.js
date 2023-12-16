import React from "react";

import { HiMenu, HiOutlineMenu } from "react-icons/hi";
import { Link } from "react-router-dom";
import { BsArrowDownRightSquareFill, BsArrowDownRight } from "react-icons/bs";
import {
  FaFacebookSquare,
  FaGithub,
  FaLinkedinIn,
  FaGofore,
} from "react-icons/fa";

import { IoLogoJavascript } from "react-icons/io5";

function HeroSction() {
  return (
    <header className="p-2 z-1000 relative col-start-1 col-end-9  min-h-screen">
      {/* <div className=" fixed top-5 left-5 right-5">
          {largeScreen === true ? largeNav : <NavBar />}
        </div> */}
      <nav className="w-[100%] h-[60px]  p-[10px] flex justify-between items-center">
        <div className="w-[30%] flex items-center">
          <figure className="w-[50px] h-[50px] mr-[20px] rounded-full ">
            <img
              src="images/pato.jpg"
              className="w-[100%] h-[100%] rounded-full"
            />
          </figure>
          <div className="p-2 w-[50px] text-white font-semibold flex justify-center items-center flex-col ">
            <div className="grid gap-x-[2px] gap-y[0]  grid-cols-2">
              {`<PC/>`}
            </div>
          </div>
        </div>
        <ul className="w-[40%] flex justify-between items-center text-port-gray font-semibold">
          <li>
            <Link to="">Projects</Link>
          </li>
          <li>
            <Link to="">Projects</Link>
          </li>
          <li>
            <Link to="">Projects</Link>
          </li>
          <li>
            <Link to="">Projects</Link>
          </li>
        </ul>
      </nav>
      <div className="w-[80%] mx-auto mt-[50px] h-[400px] flex ">
        <div className="w-[5%] h-[100%] flex items-center justify-between flex-col">
          <div className=" w-[30px] h-[30px] flex justify-center items-center">
            <div className=" mb-[20px] p-[5px] w-[10px] h-[10px] rounded-full border-[2px] border-gray-300"></div>
          </div>
          <div className="line1_gradient w-[5px] h-[45%] rounded-md"></div>
          <div className="w-[30px] my-[20px] h-[30px] flex justify-center items-center">
            <div className="pointer   w-[30px] h-[30px] rounded-full text-port-gray ">
              {"</>"}
            </div>
          </div>
          <div className="line1_gradient w-[5px] h-[45%] rounded-md"></div>
        </div>
        <div className="w-[100%] pl-[50px] h-[100%] ">
          <div className="w-[100%] h-[70%] text-white">
            <h1 className="font-bold text-[60px]">Let's build from here</h1>
            <p className="text-gray-400 w-[60%] ">
              Hi, my name is Patrick. I'm a Fullstack web developer that is
              passionate about making cutting-edge, pixel-perfect, beautiful
              interfaces, and intuitively implemented user experience.
            </p>
            <div className="w-[50%] h-[50px] mt-[30px]">
              <button className="w-[150px] p-[10px] rounded-md bg-white text-gray-800 mr-[30px]">
                View projects
              </button>
              <button className="w-[150px] p-[10px] rounded-md bg-port-pink text-white">
                Contact me
              </button>
            </div>
          </div>
          <div className="w-[100%] h-[30%] text-gray-400 font-semibold text-[18px]">
            <h3 className="flex items-center">
              <span>
                Proficient in the following languages and technologies
              </span>{" "}
              <div className="h-[20px] ml-[20px] w-[20px] bg-blue-600 flex justify-center items-center">
                <BsArrowDownRight size={15} className="text-white font-bold" />
              </div>
            </h3>
            <div className="w-[100%] flex items-center justify-between h-[100px] p-[10px]">
              <IoLogoJavascript className="w-[50px] h-[50px]" />
            </div>
          </div>
        </div>
      </div>

      {/* <div className="w-[100%] h-[100%] flex justify-center items-center">
          <h1 className="mt-[180px] md:w-[70%] md:text-4xl lg:text-5xl sl:w-[700px] lg:w-[900px] lg:px-[50px] sm:w-[80%] sm:mx-auto p-2 w-full h-[200px] small:w-[90%] small:mx-auto text-white font-bold text-3xl">
            turning ideas into marketable
            <span className="text-transparent bg-clip-text mx-2 bg-gradient-to-r from-purple-700 via-purple-400 to-purple-200">
              products
            </span>
            is my calling
          </h1>
        </div> */}
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
  );
}

export default HeroSction;
