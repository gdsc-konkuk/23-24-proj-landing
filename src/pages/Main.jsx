import React from "react";
import RotatingText from "../components/RotatingText";
import AboutUs from "../components/AboutUs";
import Slider from "../components/Slider/Slider";
import InGdsc from "../components/InGdsc";
import Desktop_blank_frame from "../assets/images/Desktop_blank_frame.png";
import gdsc_logo from "../assets/images/gdsc_logo.svg";
import TryGdsc from "../components/TryGdsc";
import Video_NotionPage from "../assets/NotionPage/Video_NotionPage.MOV";
import Video_Sequence from "../assets/videos/Sequence 01.mp4";
import Video_Timeline from "../assets/videos/Sequence 02.mp4";

// InGdsc를 넣으면 localhost:3000 무한 로딩되는 에러가 있음
// import InGdsc from "../components/InGdsc";

export default function Main() {
  return (
    <>
      <video src={Video_Sequence} alt="Video_Sequence" autoPlay muted />
      <RotatingText />
      <AboutUs />
      <video src={Video_Timeline} alt="Video_Timeline" autoPlay muted />
      <div className="justify-center flex">
        <Slider />
      </div>
      {/* InGdsc를 넣으면 localhost:3000 무한 로딩되는 에러가 있음 */}
      <TryGdsc />
      <InGdsc />
      <div className="relative">
        <div className="flex relative justify-center items-center">
          <div style={{ position: "relative" }}>
            <img
              src={Desktop_blank_frame}
              alt="Desktop_blank_frame"
              className="w-[996px] h-[600px] mt-16 mx-auto"
            />
            <video
              src={Video_NotionPage}
              alt="Video_NotionPage"
              loop
              autoPlay
              muted
              className="w-[996px] h-[600px] mt-16 mx-auto z-[-1]"
              style={{ position: "absolute", top: 40, left: 0 }}
            ></video>
          </div>
        </div>
        <div className="bg-black w-[100px] h-[100px] rounded-full flex justify-center items-center mx-auto">
          <img src={gdsc_logo} alt="gdsc_logo" className=" w-[59px] h-[29px]" />
        </div>

        <section className="bg-white z-10 w-full flex justify-center">
          <div className="text-center">
            <h3 className="font-semibold text-[54px]">GDSC Konkuk Univ.</h3>
            <p className="text-xl">
              더 나은 세상을 위한 한 걸음에 보탬이 될 수 있도록 <br />
              GDSC Konkuk과 함께 해요!
            </p>
          </div>
        </section>
      </div>
    </>
  );
}
