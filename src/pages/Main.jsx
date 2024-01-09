import React from "react";

import Header from "../components/Header";
import Footer from "../components/Footer";
import RotatingText from "../components/RotatingText";
import AboutUs from "../components/AboutUs";
import Slider from "../components/Slider/Slider";
// InGdsc를 넣으면 localhost:3000 무한 로딩되는 에러가 있음
// import InGdsc from "../components/InGdsc";

export default function Main() {
  return (
    <>
      <RotatingText />
      <Slider />
      {/* <AboutUs /> */}
      {/* InGdsc를 넣으면 localhost:3000 무한 로딩되는 에러가 있음 */}
      {/* <InGdsc /> */}
    </>
  );
}
