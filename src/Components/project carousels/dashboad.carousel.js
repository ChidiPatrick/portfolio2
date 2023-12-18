import React from "react";

//Third-party imports
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";

function DashboardCarousel() {
  const adminDashboardImages = [
    "Dashboard-admin.svg",
    "announcement.svg",
    "attendance_Today.svg",
    "classSetup.svg",
    "admin_UI.svg",
    "class_setup_main.svg",
  ];

  return (
    <AwesomeSlider
      animation="cubeAnimation"
      startup={true}
      infinite={true}
      mobileTouch={true}
    >
      {adminDashboardImages.map((imageName, index) => (
        <div className="w-[100%] h-[100%] bg-black" key={index}>
          <img className="" src={`images/${imageName}`} />
        </div>
      ))}
    </AwesomeSlider>
  );
}

export default DashboardCarousel;
