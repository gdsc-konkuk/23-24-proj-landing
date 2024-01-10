import React from "react";
import RotatingText from "../components/RotatingText";
import AboutUs from "../components/AboutUs";
import Slider from "../components/Slider/Slider";
import InGdsc from "../components/InGdsc";
import Desktop_blank_frame from "../assets/images/Desktop_blank_frame.png";
import Video_NotionPage from "../assets/NotionPage/Video_NotionPage.MOV";
import gdsc_logo from "../assets/images/gdsc_logo.svg";
import elipse from "../assets/images/elipse.svg";

// InGdsc를 넣으면 localhost:3000 무한 로딩되는 에러가 있음
// import InGdsc from "../components/InGdsc";

export default function Main() {
  return (
    <>
      <RotatingText />
      <AboutUs />
      <Slider />
      {/* InGdsc를 넣으면 localhost:3000 무한 로딩되는 에러가 있음 */}
      <InGdsc />
      <div className="flex justify-center items-center">
        <div style={{ position: "relative" }}>
          <img
            src={Desktop_blank_frame}
            alt="Desktop_blank_frame"
            className="w-[62.25rem] h-[37.55rem] mt-16 mx-auto"
          />
          <video
            src={Video_NotionPage}
            alt="Video_NotionPage"
            loop
            autoPlay
            muted
            className="w-[62.25rem] h-[37.55rem] mt-16 mx-auto"
            style={{ position: "absolute", top: 40, left: 0 }}
          ></video>
        </div>
      </div>
      <div className="justify-center items-center">
        <img src={gdsc_logo} alt="gdsc_logo" className="z-10 justify-center" />
      </div>
    </>
  );
}
