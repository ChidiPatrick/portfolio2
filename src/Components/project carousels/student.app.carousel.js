import React from "react";

import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";

function StudentAppCarousel() {
  const studentUIImages = [
    "edit_profile.svg",
    "home_UI.svg",
    "Login.svg",
    "Request_permission_absent.svg",
    "Set_profile_picture.svg",
    "Signup.svg",
    "student_attendance_history.svg",
    "Student_attendance.svg",
    "student_profile.svg",
  ];

  return (
    <AwesomeSlider
      nimation="cubeAnimation"
      startup={true}
      infinite={true}
      mobileTouch={true}
      className="bg-black"
    >
      {studentUIImages.map((imageName, index) => (
        <div key={index} className="w-[100%] h-[100%] bg-black">
          <img
            className="h-[100%] w-[100%]"
            src={`images/student app UIs/${imageName}`}
          />
        </div>
      ))}
    </AwesomeSlider>
  );
}

export default StudentAppCarousel;
