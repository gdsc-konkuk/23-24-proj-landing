import React, { useRef, useState, useEffect } from "react";
import LeftArrow from "../../assets/images/slides/LeftArrow.png";
import RightArrow from "../../assets/images/slides/RightArrow.png";
import CarouselItem from "./CarouselItem";

export default function Carousel({ carouselList }) {
  const [currIndex, setCurrIndex] = useState(0);
  const [currList, setCurrList] = useState();

  useEffect(
    (index) => {
      if (carouselRef.current !== null) {
        const changeValue = currIndex * 20;
        carouselRef.current.style.transform = `translateX(-${changeValue}%)`;
        console.log(index);
      }
    },
    [currIndex]
  );

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
    <div className='flex items-center  w-full group'>
      <button
        className='absolute hidden left-10 top-3/5 z-10 group-hover:block'
        onClick={() => handleSwipe(-1)}
      >
        <img src={LeftArrow} alt='LeftArrow' />
      </button>
      <button
        className='absolute hidden right-10 top-3/5 z-10 group-hover:block'
        onClick={() => handleSwipe(1)}
      >
        <img src={RightArrow} alt='RightArrow' />
      </button>
      <div className='w-full overflow-hidden'>
        <div ref={carouselRef} className='flex whitespace-nowrap z-1'>
          {currList?.map((item, idx) => {
            // const key = `${image}-${idx}`;

            return <CarouselItem image={item.image} text={item.text} />;
          })}
        </div>
      </div>
    </div>
  );
}
