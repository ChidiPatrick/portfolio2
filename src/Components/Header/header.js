import React from "react";

const Header = () => {
  return (
    <header className="p-4 relative col-start-1 col-end-9  h-screen">
      <nav className="z-200 col-start-1 col-end-9 abosolute top-0 left-0  h-14 border border-gray-600 rounded-md bg-port-primary flex justify-between  mx-auto w-3/4">
        <div className="p-2 text-port-gray">name logo</div>
        <div className="text-port-gray">full name animation</div>
        <div className="text-port-gray w-20 flex flex-col place-content-center">
          <div className="w-2/4 h-px my-1 bg-port-gray"></div>
          <div className="w-2/4 h-px my-1 bg-port-gray"></div>
          <div className="w-2/4 h-px my-1 bg-port-gray"></div>
        </div>
      </nav>
      <h1 className="mt-20 text-white font-bold text-3xl">
        turning ideas into marketable
        <span className="text-port-pink mx-2">products </span> is my calling
      </h1>
      <figure className="w-10 h-20 absolute top-3 left-0">
        <img src="/images/hand-left.webp" alt="left hand image" />
      </figure>
      <figure className="w-20 h-5 absolute top-2/4 right-0">
        <img src="/images/hand-right.webp" alt="right hand image" />
      </figure>
      <div className="mt-26">
        <a
          href="#"
          className="text-port-gray border-b border-port-gray absolute left-5 top-3/4 font-bold text-sm"
        >
          VIEW PROJECTS
        </a>
      </div>
      <div className="px-2 flex justify-between text-port-gray absolute top-3/4 mt-14 w-full left-0">
        <div className="w-14 h-5 border border-port-pink rounded-full"></div>
        <div>contact info</div>
      </div>
    </header>
  );
};

export default Header;
