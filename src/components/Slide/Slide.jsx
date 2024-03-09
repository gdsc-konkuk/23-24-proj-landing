import React, { useCallback, useRef } from "react";

import Slider from "react-slick";

import FirstSessionImage from "../../assets/images/slides/1st_session.jpeg";
import SecondSessionImage from "../../assets/images/slides/2nd_session.jpeg";
import ThirdSessionImage from "../../assets/images/slides/3rd_session.png";
import PrevArrow from "../../assets/images/slides/LeftArrow.png";
import NextArrow from "../../assets/images/slides/RightArrow.png";
import CarouselItem from "./CarouselItem";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CAROUSEL_IMAGES = [
  { image: FirstSessionImage, text: "Gen AI" },
  { image: SecondSessionImage, text: "Let's Git it" },
  { image: ThirdSessionImage, text: "파트별 노션 꾸미기" },
];

export default function Slide() {
  const slickRef = useRef(null);

  const previous = useCallback(() => slickRef.current.slickPrev(), []);
  const next = useCallback(() => slickRef.current.slickNext(), []);

  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 500,
  };

  return (
    <div>
      <div className='text-center'>
        <h3 className='text-[54px] font-semibold'>Grow With GDSC</h3>
        <h4 className='text-[20px] font-semibold'>
          "열정을 갖고 성장을 목표로"
        </h4>
        <span className='mb-8'>
          GDSC Konkuk에서는 정기적으로 세션을 통해
          <br /> 함께 성장해 나가는 기회를 만들고자 해요.
        </span>
        <div className='relative slider-container min-w-slideWidth group'>
          <div className='z-[-1]'>
            <Slider {...settings} className='mt-10' ref={slickRef}>
              {CAROUSEL_IMAGES.map((item) => (
                <CarouselItem image={item.image} text={item.text} />
              ))}
            </Slider>
          </div>
          <div className='absolute top-1/2 left-2 z-10' onClick={previous}>
            <img src={PrevArrow} alt='PrevArrow' />
            {/* <FaArrowLeft color='black' fontSize='1.8rem' /> */}
          </div>
          <div className='absolute right-5 top-1/2 z-10' onClick={next}>
            <img src={NextArrow} alt='NextArrow' />
          </div>
        </div>
      </div>
    </div>
  );
}
