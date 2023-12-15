import React from "react";

import Header from "../components/Header";
import Footer from "../components/Footer";
import RotatingText from "../components/RotatingText";
import AboutUs from "../components/AboutUs";

export default function Main() {
  return (
    <>
      <Header />
      <RotatingText />
      <AboutUs />
      <Footer />
    </>
  );
}
