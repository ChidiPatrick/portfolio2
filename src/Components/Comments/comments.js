import React from "react";

const Comments = () => {
  return (
    <div className="m-4  col-start-1 col-end-9 text-port-gray">
      <div className="w-full bg-port-primary p-4 h-80">
        <figure
          className="w-20 h-20 border border-opacity-5 flex justify-content-center items-center
         rounded-full"
        >
          <div className="w-full text-center">image</div>
        </figure>
        <p className="w-full h-40 bg-blue-300 my-2">Review body here</p>
        <div className="text-center">Name and occupation</div>
      </div>
    </div>
  );
};

export default Comments;
