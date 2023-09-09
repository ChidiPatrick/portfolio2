import React from "react";

import { FaDribbble, FaGithub } from "react-icons/fa6";
import { motion } from "framer-motion";

function Main() {
  return (
    <section className="col-start-1 col-end-9 text-port-gray  py-4 px-4 bg-black">
      {/* <div>
        <figure>
          <img
            src="images/skalo.jpg"
            className="w-[200px] h-[200px] border border-port-gray rounded-full"
          />
        </figure>
      </div> */}
      <div className="flex justify-center w-full ">
        <p className="md:px-[50px] lg:w-[80%] lg:px-[100px] mx-auto lg:w-[60%]">
          Hey buddy👋, My name is Patrick, I'm a frontend web developer based in
          Lagos, Nigeria. I'm passionate about making cutting-edge,
          pixel-perfect, beautiful interfaces, and intuitively implemented user
          experience.
        </p>
      </div>

      <div>
        <h2 className="mt-10 text-2xl font-bold md:px-[50px] sl:[80%] sl:mx-auto lg:px-[100px]">
          Yes, I put in the work 💼
        </h2>
        <div className="text-sm mt-3 md:px-[50px]  lg:px-[100px]">
          Each Project is Unique. Here are some of my works
        </div>
        <div className="sl:w-[80%] mx-auto  ">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1, width: "100%" }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="mt-20 sl:h-[700px] relative border bg-port-primary border-port-gray border-opacity-10 flex flex-col  items-center rounded-xl"
          >
            <div className="w-3/4 mt-10 mx-0 flex place-content-center bordeter rounded-xl  bg-black h-80 sl:h-[80%]">
              <div>Project Image here</div>
            </div>
            <div className="mt-2 py-4">
              <h3 className="w-[100%] text-xl font-bold">
                Attendance management system
              </h3>
              <div className="mt-2">
                <a
                  href="#"
                  className="text-sm p-1 text-port-green mt-3 tracking-wider border-b border-port-gray"
                >
                  VIEW THE APP
                </a>
              </div>
              <div className="w-14 flex mt-4">
                <FaDribbble className="mr-2" />
                <a href="https://github.com/ChidiPatrick/newportfoliosite">
                  <FaGithub />
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
            className="w-full mt-20 sl:h-[700px] relative border bg-port-primary border-port-gray border-opacity-10 flex flex-col  items-center rounded-xl"
          >
            <div className="w-3/4 mt-10 mx-0 flex place-content-center bordeter rounded-xl  bg-black h-80 sl:h-[80%]">
              <div>Project Image here</div>
            </div>
            <div className="mt-2 py-4">
              <h3 className="w-[100%] text-xl font-bold">
                Attendance management system
              </h3>
              <div className="mt-2">
                <a
                  href="#"
                  className="text-sm p-1 text-port-green mt-3 tracking-wider border-b border-port-gray"
                >
                  VIEW THE APP
                </a>
              </div>
              <div className="w-14 flex mt-4">
                <FaDribbble className="mr-2" />
                <a href="https://github.com/ChidiPatrick/newportfoliosite">
                  <FaGithub />
                </a>
              </div>
            </div>
            <figure className="absolute -top-5 -right-2">
              <img src="/images/svg2.svg" />
            </figure>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1, width: "100%" }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="w-full mt-20 sl:h-[700px] relative border bg-port-primary border-port-gray border-opacity-10 flex flex-col  items-center rounded-xl"
          >
            <div className="w-3/4 mt-10 mx-0 flex place-content-center bordeter rounded-xl  bg-black h-80 sl:h-[80%]">
              <div>Project Image here</div>
            </div>
            <div className="mt-2 py-4">
              <h3 className="w-[100%] text-xl font-bold">
                Attendance management system
              </h3>
              <div className="mt-2">
                <a
                  href="#"
                  className="text-sm p-1 text-port-green mt-3 tracking-wider border-b border-port-gray"
                >
                  VIEW THE APP
                </a>
              </div>
              <div className="w-14 flex mt-4">
                <FaDribbble className="mr-2" />
                <a href="https://github.com/ChidiPatrick/newportfoliosite">
                  <FaGithub />
                </a>
              </div>
            </div>
            <figure className="absolute -top-5 -right-2">
              <img src="/images/svg3.svg" />
            </figure>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Main;
