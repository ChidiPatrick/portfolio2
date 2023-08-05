import React from "react";

function ContactMe() {
  return (
    <div className="h-screen w-full text-port-gray ">
      <h2 className="w-full text-center my-[10px]">Contact Me</h2>
      <form>
        <div className="w-full flex justify-between my-4" htmlFor="userName">
          <div className="w-[20%] p-1 ">Name:</div>
          <input
            className="bg-black p-1 w-[80%] outline-none border border-black focus:border-port-pink rounded-xl"
            type="text "
            id="userName"
            placeholder="Your name"
          />
        </div>

        <div className="w-full flex justify-between my-4" htmlFor="userEmail">
          <div className="w-[20%] p-1">Email: </div>
          <input
            className="bg-black p-1 w-[80%] outline-none border border-black focus:border-port-pink rounded-xl"
            type="email"
            id="userEmail"
            placeholder="your email"
          />
        </div>

        <label htmlFor="message">Message</label>
        <textarea
          type="text"
          id="message"
          placeholder="Your message"
        ></textarea>
      </form>
    </div>
  );
}

export default ContactMe;
