import React from "react";

//Third-party imports
import { GoBriefcase } from "react-icons/go";
import { FaDribbble, FaGithub } from "react-icons/fa6";
import { motion } from "framer-motion";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import DashboardCarousel from "../project carousels/dashboad.carousel";
import StudentAppCarousel from "../project carousels/student.app.carousel";

function Main() {
  return (
    <section className="col-start-1 col-end-9 text-port-gray  py-4 px-[10px] bg-black">
      <div className="w-[100%] mx-auto">
        <h2 className="mt-10 text-2xl font-bold md:px-[50px] sl:[80%] sl:mx-auto lg:px-[100px]">
          Yes, I put in the work 💼
        </h2>
        <div className="text-sm mt-3 md:px-[50px]  lg:px-[100px]">
          Each Project is Unique. Here are some of my works
        </div>
        <div id="projects" className="flex">
          {/* <div className="w-[5%] min-h-[100%]  flex items-center  flex-col">
            <div className=" w-[30px] h-[30px] flex justify-center items-center">
              <div className="pointer_green mb-[40px] w-[30px] h-[30px] flex justify-center items-center rounded-full text-port-gray ">
                <GoBriefcase size={20} className="" />
              </div>
            </div>
            <div className="projects_line w-[5px] h-[30%] rounded-md"></div>
            <div className=" w-[30px] h-[30px] mb-[40px] flex justify-center items-center">
              <div className="pointer_green mt-[40px] w-[30px] h-[30px] flex justify-center items-center rounded-full text-port-gray ">
                <GoBriefcase size={20} className="" />
              </div>
            </div>
            <div className="projects_line w-[5px] h-[30%] rounded-md"></div>
            <div className=" w-[30px] h-[30px] mt-[20px] flex justify-center items-center">
              <div className="pointer_green mt-[40px] w-[30px] h-[30px] flex justify-center items-center rounded-full text-port-gray ">
                <GoBriefcase size={20} className="" />
              </div>
            </div>
            <div className="projects_line w-[5px] mt-[40px] h-[40%] rounded-md"></div>
            <div className=" w-[30px] h-[30px] mt-[20px] flex justify-center items-center">
              <div className="pointer_green mt-[40px] w-[30px] h-[30px] flex justify-center items-center rounded-full text-port-gray ">
                <GoBriefcase size={20} className="" />
              </div>
            </div>
            <div className="w-[30px] my-[20px] h-[30px] flex justify-center items-center"></div>
          </div> */}
          <div className="w-[100%] ml-[10px] sl:w-[80%] mx-auto" id="projects">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1, width: "100%" }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="mt-20 h-[400px] sl:h-[700px] relative border bg-port-primary border-port-gray border-opacity-10 flex flex-col  items-center rounded-xl"
            >
              <h3 className="p-[10px] text-gray-400 text-center w-[100%] text-lg font-semibold">
                Attendance management system's Dashboard
              </h3>
              <div className="w-3/4 mt-10 mx-0 flex place-content-center rounded-xl  bg-black h-80 sl:h-[80%]">
                <DashboardCarousel />
              </div>
              <div className="mt-2 py-4">
                <div className="my-[20px]">
                  <a
                    href="https://lmtechattendancesystem.netlify.app"
                    className="text-sm p-1 text-port-green mt-3 tracking-wider border-b border-port-gray"
                  >
                    VIEW APP
                  </a>
                </div>
              </div>
              <figure className="absolute -top-5 -right-2">
                <img src="/images/SVG1.svg" />
              </figure>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1, width: "100%" }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="w-full mt-20 h-[400px] sl:h-[700px] relative border bg-port-primary border-port-gray border-opacity-10 flex flex-col  items-center rounded-xl"
            >
              <h3 className="p-[10px]  text-gray-400 text-center w-[100%] text-lg font-semibold">
                Attendance management system
              </h3>
              <div className="w-[40%] mt-10 mx-0 flex place-content-center rounded-xl   h-80 sl:h-[80%]">
                <StudentAppCarousel />
              </div>
              <div className="mt-2 py-4">
                <div className="my-[20px]">
                  <a
                    href="https://lmtechattendancesystem.netlify.app"
                    className="text-sm p-1 text-port-green mt-3 tracking-wider border-b border-port-gray"
                  >
                    VIEW THE APP
                  </a>
                </div>
              </div>
              <figure className="absolute -top-5 -right-2">
                <img src="/images/svg2.svg" />
              </figure>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Main;
