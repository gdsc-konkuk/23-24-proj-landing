import React from "react";

export default function Card({ image, text }) {
  return (
    <div>
      <img src={image} alt="slide_image" />
      <p>{text}</p>
    </div>
  );
}
