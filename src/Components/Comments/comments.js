import React, { useState } from "react";

import { useLocomotiveScroll } from "react-locomotive-scroll";
import { motion } from "framer-motion";

/// Imports from local Directory ////
import { comments } from "./commentsData";

const Comments = () => {
  const [currComment, setCurComment] = useState(0);
  const { scroll } = useLocomotiveScroll();
  //// Button Handler functions ////

  const moveRight = (index) => {
    let newSlide = 0;
    if (index === comments.length - 1) {
      setCurComment(0);
      console.log(newSlide);
    } else {
      newSlide = index + 1;
      setCurComment(newSlide);
      console.log(newSlide);
    }
  };

  const moveLeft = (index) => {
    let newSlide = 0;
    if (index === 0) {
      newSlide = comments.length - 1;
      setCurComment(newSlide);
      console.log(newSlide);
    } else {
      newSlide = index - 1;
      setCurComment(newSlide);
      console.log(newSlide);
    }
  };

  return (
    <motion.section
      initial={{ opacity: 0, scale: 0.1 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, delay: 0.2 }}
      id="comments"
      className="sl:w-[80%] sl:mx-auto p-4 bg-black col-start-1 col-end-9 text-port-gray  h-[420px] "
    >
      {comments.map((comment, index) => {
        return (
          <div
            className={
              index === currComment
                ? "w-full bg-port-primary p-4 h-80 border  border-port-gray border-opacity-10 rounded-xl"
                : "hidden"
            }
            key={index}
          >
            <p className="w-full h-40 text-port-gray my-2 overflow-y-scroll">
              "{comments[index].recommendation}"
            </p>
            <div className="w-full flex justify-center items-center my-4">
              <figure
                className="w-14 h-14 border border-opacity-5 flex justify-content-center items-center
              rounded-full"
              >
                <img
                  src={comments[index].image}
                  className="w-full h-full border rounded-full"
                  alt="reviwer"
                />
              </figure>
            </div>
            <div className="text-center">{comments[index].title}</div>
            <div className="w-full flex justify-center items-center">
              <div className="p-2 flex">
                {comments.map((item, index) => {
                  return (
                    <div
                      key={index}
                      className={
                        currComment === index
                          ? "w-2 h-2 border rounded-full bg-gray-700 mx-1"
                          : "w-2 h-2 border rounded-full bg-gray-100 mx-1"
                      }
                    ></div>
                  );
                })}
              </div>
            </div>

            <div className="w-full flex justify-center items-center mt-[20px]">
              <button
                className="mr-4 p-1 text-port-gray  border rounded-2xl w-20 border-port-pink bg-black"
                onClick={() => moveLeft(index)}
              >
                Prev
              </button>
              <button
                className="p-1 text-port-gray  border rounded-2xl w-20 border-port-pink bg-black"
                onClick={() => moveRight(index)}
              >
                Next
              </button>
            </div>
          </div>
        );
      })}
    </motion.section>
  );
};

export default Comments;
