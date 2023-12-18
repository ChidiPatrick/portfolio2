import React from "react";

import { HiMenu, HiOutlineMenu } from "react-icons/hi";
import { Link, useNavigate } from "react-router-dom";
import { BsArrowDownRightSquareFill, BsArrowDownRight } from "react-icons/bs";
import {
  FaFacebookSquare,
  FaGithub,
  FaLinkedinIn,
  FaGofore,
} from "react-icons/fa";

import { IoLogoJavascript } from "react-icons/io5";
import { FaReacteurope } from "react-icons/fa6";
import { FaNode } from "react-icons/fa6";
import { SiMongodb } from "react-icons/si";
import { SiRedux } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa6";
import { MdCss } from "react-icons/md";
import { BsFiletypeScss } from "react-icons/bs";
import { FaGitSquare } from "react-icons/fa";
import { BiLogoTailwindCss } from "react-icons/bi";
import { BiLogoFirebase } from "react-icons/bi";
import { SiExpress } from "react-icons/si";
import useMediaQuery from "react-hook-media-query";
import Menu from "../menu/menu";

function HeroSction() {
  const navigate = useNavigate();

  const deviceWidth = window.innerWidth;

  const bigScreenNavBar = (
    <ul className="w-[30%] flex justify-between items-center text-port-gray font-semibold">
      <li>
        <a href="#projects">Projects</a>
      </li>
      <li>
        <a href="#contact_me">Contact me</a>
      </li>
      <li>
        <a href="#reviews">Reviews</a>
      </li>
    </ul>
  );

  return (
    <header className="p-2 z-1000 relative col-start-1 col-end-9  min-h-screen">
      <nav className="w-[100%] fixed top-0 left-0 h-[60px]  p-[10px] flex justify-between items-center">
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
        {deviceWidth <= 970 ? <Menu /> : bigScreenNavBar}
        {/* <ul className="w-[30%] flex justify-between items-center text-port-gray font-semibold">
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact_me">Contact me</a>
          </li>
          <li>
            <a href="#reviews">Reviews</a>
          </li>
        </ul> */}
      </nav>
      <div className="w-[80%] mx-auto mt-[100px]  min-h-[400px] flex ">
        <div className="w-[5%] min-h-[100%] flex items-center justify-between flex-col">
          <div className=" w-[30px] h-[30px] flex justify-center items-center">
            <div className=" mb-[20px] p-[5px] w-[10px] h-[10px] rounded-full border-[2px] border-gray-300"></div>
          </div>
          <div className="line1_gradient w-[5px] h-[45%] rounded-md"></div>
          <div className="w-[30px] my-[20px] h-[30px] flex justify-center items-center">
            <div className="pointer w-[30px] h-[30px] rounded-full text-port-gray ">
              {"</>"}
            </div>
          </div>
          <div className="line2_gradient w-[5px] h-[45%] rounded-md"></div>
          <div className=" w-[30px] h-[30px] mt-[20px] flex justify-center items-center">
            <div className="pointer mb-[20px] p-[5px] w-[10px] h-[10px] rounded-full border-[2px] border-gray-300"></div>
          </div>
        </div>
        <div className="w-[100%] pl-[50px] h-[100%] ">
          <div className="w-[100%] h-[70%] text-white">
            <h1 className="font-bold text-[60px]">Let's build from here</h1>
            <p className="text-gray-400 w-[60%] ">
              Hi, my name is Patrick. I'm a Fullstack web developer that is
              passionate about making cutting-edge, pixel-perfect, beautiful
              interfaces, and intuitively implemented user experience.
            </p>
            <div className="w-[60%]  h-[50px] mt-[30px]">
              <a
                href="#projects"
                className="w-[150px] p-[10px] rounded-md bg-white text-gray-800 mr-[30px]"
              >
                View projects
              </a>
              <a className="w-[150px] p-[10px] rounded-md bg-port-pink text-white">
                Contact me
              </a>
            </div>
            <div className="flex mt-[20px] px-4">
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
          <div className="w-[100%] mt-[40px] h-[30%] text-gray-400 font-semibold text-[18px]">
            <h3 className="flex items-center mb-[20px]">
              <span>
                Proficient in the following languages and technologies
              </span>{" "}
              <div className="h-[20px] ml-[20px] w-[20px] bg-blue-600 flex justify-center items-center">
                <BsArrowDownRight size={15} className="text-white font-bold" />
              </div>
            </h3>
            <div className="w-[100%] flex items-center justify-between h-[100px] p-[10px]">
              <div className="flex flex-col justify-center items-center">
                <IoLogoJavascript className="w-[50px] h-[50px]" />
                <div>javaScript</div>
              </div>
              <div className="flex flex-col justify-center items-center">
                <FaReacteurope className="w-[50px] h-[50px]" />
                <div>React.js</div>
              </div>
              <div className="flex flex-col justify-center items-center">
                <SiRedux className="w-[50px] h-[50px]" />
                <div>Redux</div>
              </div>
              <div className="flex flex-col justify-center items-center">
                <FaNode className="w-[50px] h-[50px]" />
                <div>Node.js</div>
              </div>
              <div className="flex flex-col justify-center items-center">
                <SiExpress className="w-[50px] h-[50px]" />
                <div>Express.js</div>
              </div>
              <div className="flex flex-col justify-center items-center">
                <SiMongodb className="w-[50px] h-[50px]" />
                <div>MongoDB</div>
              </div>
              <div className="flex flex-col justify-center items-center">
                <BiLogoFirebase className="w-[50px] h-[50px]" />
                <div>Firebase</div>
              </div>
              <div className="flex flex-col justify-center items-center">
                <FaHtml5 className="w-[50px] h-[50px]" />
                <div>HTML5</div>
              </div>
              <div className="flex flex-col justify-center items-center">
                <BiLogoTailwindCss className="w-[50px] h-[50px]" />
                <div>Tailwind CSS</div>
              </div>
              <div className="flex flex-col justify-center items-center">
                <MdCss className="w-[50px] h-[50px]" />
                <div>CSS3</div>
              </div>
              <div className="flex flex-col justify-center items-center">
                <BsFiletypeScss className="w-[50px] h-[50px]" />
                <div>SCSS</div>
              </div>
              <div className="flex flex-col justify-center items-center">
                <FaGitSquare className="w-[50px] h-[50px]" />
                <div>Git</div>
              </div>
              <div className="flex flex-col justify-center items-center">
                <FaGithub className="w-[50px] h-[50px]" />
                <div>GitHub</div>
              </div>
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
      {/* <figure className="w-10 h-20 absolute top-[15%] left-0">
        <img src="/images/hand-left.webp" alt="left hand" />
      </figure>
      <figure className="w-20 h-5 absolute top-2/4 right-0">
        <img src="/images/hand-right.webp" alt="right hand" />
      </figure> */}
      {/* <div className=" w-full h-[20px] mt-26">
        <div className=" w-full">
          <a className="md:ml-[50px] lg:ml-[100px] text-port-gray border-b border-port-gray absolute left-5 top-3/4 font-bold text-sm">
            VIEW PROJECTS
          </a>
        </div>
      </div> */}
      <div className="md:px-[50px] lg:px-[100px]  px-2 flex flex-col justify-between text-port-gray absolute "></div>
    </header>
  );
}

export default HeroSction;
