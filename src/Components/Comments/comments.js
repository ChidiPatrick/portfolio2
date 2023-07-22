import React, { useState } from "react";

/// Imports from local Directory ////
import { comments } from "./commentsData";

const Comments = () => {
  const [currComment, setCurComment] = useState(0);

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
    <div className="m-4  col-start-1 col-end-9 text-port-gray">
      {comments.map((comment, index) => {
        return (
          <div
            className={
              index === currComment
                ? "w-full bg-port-primary p-4 h-80"
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

            <div className="w-full flex justify-center items-center">
              <button
                className="mr-4 p-2 text-black bg-port-gray"
                onClick={() => moveLeft(index)}
              >
                Prev
              </button>
              <button
                className="p-2 bg-port-gray text-black"
                onClick={() => moveRight(index)}
              >
                Next
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Comments;
