import React, { useRef, useState, useEffect } from "react";

export default function Carousel({ carouselList }) {
  const [currIndex, setCurrIndex] = useState(0);
  const [currList, setCurrList] = useState();

  useEffect(() => {
    if (carouselRef.current !== null) {
      carouselRef.current.style.transform = `translateX(-${currIndex}00%)`;
    }
  }, [currIndex]);

  useEffect(() => {
    if (carouselList.length !== 0) {
      const startData = carouselList[0];
      const endData = carouselList[carouselList.length - 1];
      const newList = [endData, ...carouselList, startData];

      setCurrList(newList);
    }
  }, [carouselList]);

  const moveToNthSlide = (index) => {
    setTimeout(() => {
      setCurrIndex(index);
      if (carouselRef.current !== null) {
        carouselRef.current.style.transition = "";
      }
    }, 500);
  };

  const handleSwipe = (direction) => {
    const newIndex = currIndex + direction;

    if (newIndex < 0) {
      moveToNthSlide(carouselList.length - 1);
    } else if (newIndex >= carouselList.length) {
      moveToNthSlide(0);
    } else {
      setCurrIndex((prev) => prev + direction);
    }

    console.log(currIndex);
    if (carouselRef.current !== null) {
      carouselRef.current.style.transition = "all 0.5s ease-in-out";
    }
  };
  const carouselRef = useRef(null);

  return (
    <div class="flex items-center justify-center w-full">
      <div class="group relative w-full overflow-hidden">
        <button
          class="hidden left-0 absolute top-1/2 z-10 group-hover:block"
          onClick={() => handleSwipe(-1)}
        >
          Left
        </button>
        <button
          class="hidden right-0 absolute top-1/2 z-10 group-hover:block"
          onClick={() => handleSwipe(1)}
        >
          Right
        </button>

        <div ref={carouselRef} class="flex whitespace-nowrap">
          {currList?.map((image, idx) => {
            const key = `${image}-${idx}`;

            return (
              <img
                src={image}
                alt="carousel-img"
                class="object-cover h-[350px] w-full flex-shrink-0"
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
