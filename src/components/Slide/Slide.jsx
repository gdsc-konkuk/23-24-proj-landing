import React from "react";
// import Carousel from "./Carousel";
import Slider from "react-slick";
import CarouselItem from "../Slide/CarouselItem";

import FirstSessionImage from "../../assets/images/slides/1st_session.jpeg";
import SecondSessionImage from "../../assets/images/slides/2nd_session.jpeg";
import ThirdSessionImage from "../../assets/images/slides/3rd_session.png";
import Card from "./Card";

const CAROUSEL_IMAGES = [
  { image: FirstSessionImage, text: "Gen AI" },
  { image: SecondSessionImage, text: "Let's Git it" },
  { image: ThirdSessionImage, text: "파트별 노션 꾸미기" },
];

export default function Slide() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div>
      <div className="text-center">
        <h3 className="text-[54px] font-semibold">Grow With GDSC</h3>
        <h4 className="text-[20px] font-semibold">
          "열정을 갖고 성장을 목표로"
        </h4>
        <span className="mb-8">
          GDSC Konkuk에서는 정기적으로 세션을 통해
          <br /> 함께 성장해 나가는 기회를 만들고자 해요.
        </span>
        {/* 라이브러리 없이 사용 */}
        {/* <Carousel carouselList={CAROSEL_IMAGES} /> */}
        {/* 라이브러리 이용 */}
        <Slider {...settings}>
          {CAROUSEL_IMAGES.map((item) => (
            <Card image={item.image} text={item.text} />
          ))}
        </Slider>
      </div>
    </div>
  );
}
