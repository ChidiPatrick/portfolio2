import React from "react";

import { FaDribbble, FaGithub } from "react-icons/fa6";

function Main() {
  return (
    <section className="col-start-1 col-end-9 text-port-gray mt-5 p-4">
      <p>
        Hey buddy👋, My name is Patrick, I'm a frontend web developer that is
        passionate about making aethetically pleasing and highly optimized web
        applications that solves most of our everyday life problems.
      </p>
      <div className="mt-10 ">
        <h2 className="mt-10 text-2xl font-bold">Yes, I put in the work 💼</h2>
        <div className="text-sm mt-3">
          Each Project is Unique. Here are some of my works
        </div>
        <div className="w-full mt-20 h-1/2 relative border bg-port-primary border-port-gray border-opacity-10 flex flex-col  items-center rounded-xl">
          <div className="w-3/4 mt-10 mx-0 flex place-content-center bordeter rounded-xl  bg-black h-80">
            <div>Project Image here</div>
          </div>
          <div className="mt-2 py-4">
            <h3 className="w-1/2 text-xl font-bold">
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
        </div>
        <div className="w-full mt-20 h-1/2 relative border bg-port-primary border-port-gray border-opacity-10 flex flex-col  items-center rounded-xl">
          <div className="w-3/4 mt-10 mx-0 flex place-content-center bordeter rounded-xl  bg-black h-80">
            <div>Project Image here</div>
          </div>
          <div className="mt-2 py-4">
            <h3 className="w-1/2 text-xl font-bold">
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
        </div>
        <div className="w-full mt-20 h-1/2 relative border bg-port-primary border-port-gray border-opacity-10 flex flex-col  items-center rounded-xl">
          <div className="w-3/4 mt-10 mx-0 flex place-content-center bordeter rounded-xl  bg-black h-80">
            <div>Project Image here</div>
          </div>
          <div className="mt-2 py-4">
            <h3 className="w-1/2 text-xl font-bold">
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
        </div>
      </div>
    </section>
  );
}

export default Main;
