import React from "react";

export default function CarouselItem({ image, text }) {
  return (
    <div
      class={`relative h-[350px] w-[580px] mx-6 object-cover overflow-hidden`}
    >
      <img
        src={image}
        alt="carousel-img"
        class="rounded-lg object-cover h-[350px] flex-shrink-0"
      />
      <div class="absolute inset-0 bg-black rounded-lg bg-opacity-50 flex opacity-0 hover:opacity-100 p-10">
        <p class="text-white text-lg">{text}</p>
      </div>
    </div>
  );
}
