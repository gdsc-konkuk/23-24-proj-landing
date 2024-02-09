import React from "react";
import RotatingText from "../components/RotatingText";
import AboutUs from "../components/AboutUs";
import Slide from "../components/Slide/Slide";
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
      <video
        src={Video_Sequence}
        className="h-[1100px] mx-auto min-w-[900px]"
        alt="Video_Sequence"
        autoPlay
        muted
      />
      <RotatingText />
      <AboutUs />
      <video
        src={Video_Timeline}
        className="mt-[120px] mx-auto"
        alt="Video_Timeline"
        autoPlay
        muted
      />
      <div className="justify-center flex">
        <Slide />
      </div>
      <TryGdsc />
      <InGdsc />
      <div className="relative bg-gradient-to-b from-transparent to-indigo-100 z-[-1] top-10">
        <div className="flex relative justify-center items-center flex-shrink-0">
          <div style={{ position: "relative" }}>
            <img
              src={Desktop_blank_frame}
              alt="Desktop_blank_frame"
              className="w-[996px] h-[600px] mt-16 mx-auto flex-shrink-0 min-w-[950px]"
            />
            <video
              src={Video_NotionPage}
              alt="Video_NotionPage"
              loop
              autoPlay
              muted
              className="w-[996px] h-[600px] absolute mt-16 mx-auto z-[-1] flex-shrink-0 min-w-[950px]"
              style={{
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
              }} // 중앙 정렬
            ></video>
          </div>
        </div>
        <div className="relative w-full bg-white">
          <div
            className="bg-black w-[100px] h-[100px] rounded-full flex justify-center items-center mx-auto"
            style={{
              bottom: "20%",
              left: "50%",
              transform: "translateY(-50%)",
            }}
          >
            <img
              src={gdsc_logo}
              alt="gdsc_logo"
              className="w-[59px] h-[29px]"
            />
          </div>
        </div>
      </div>
      <section className="bg-white z-10 w-full flex justify-center mt-5">
        <div className="text-center">
          <h3 className="font-semibold text-[54px]">GDSC Konkuk Univ.</h3>
          <p className="text-xl">
            더 나은 세상을 위한 한 걸음에 보탬이 될 수 있도록 <br />
            GDSC Konkuk과 함께 해요!
          </p>
        </div>
      </section>
    </>
  );
}
