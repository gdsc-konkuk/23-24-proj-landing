import React from "react";

import Header from "../components/Header";
import Footer from "../components/Footer";
import RotatingText from "../components/RotatingText";
import AboutUs from "../components/AboutUs";
import InGdsc from "../components/InGdsc";

export default function Main() {
  return (
    <>
      <Header />
      <RotatingText />
      <AboutUs />
      <InGdsc/>
      <Footer />
    </>
  );
}
