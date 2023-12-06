import React from "react";
import Carousel from "./Carousel";

const CAROSEL_IMAGES = [
  "https://img.freepik.com/free-photo/vivid-blurred-colorful-background_58702-2545.jpg",
  "https://img.freepik.com/premium-vector/abstract-pastel-color-background-with-pink-purple-gradient-effect-graphic-design-decoration_120819-463.jpg",
  "https://media.architecturaldigest.com/photos/6080a73d795a7b010f3dd2e0/2:1/w_2700,h_1350,c_limit/GettyImages-1213929929.jpg",
];

export default function Slider() {
  return (
    <div>
      <div class="text-center">
        <h3 class="text-[54px] font-semibold">Grow With GDSC</h3>
        <h4 class="text-[20px] font-semibold">"열정을 갖고 성장을 목표로"</h4>
        <>
          GDSC Konkuk에서는 정기적으로 세션을 통해
          <br /> 함께 성장해 나가는 기회를 만들고자 해요.
        </>
        <Carousel carouselList={CAROSEL_IMAGES} />
      </div>
    </div>
  );
}
