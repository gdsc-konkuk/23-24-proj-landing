import React from "react";

export default function CarouselItem({ image, text }) {
  return (
    <div className={`relative h-[350px] w-[580px] mx-6 object-cover`}>
      <img
        src={image}
        alt="carousel-img"
        className="rounded-lg object-cover h-full w-full flex-shrink-0"
      />
      <div className="absolute inset-0 bg-black rounded-lg bg-opacity-50 flex opacity-0 hover:opacity-100">
        <p className="text-white text-lg p-10">{text}</p>
      </div>
    </div>
  );
}
