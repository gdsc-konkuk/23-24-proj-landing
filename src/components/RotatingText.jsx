import React from "react";
import "./RotatingText.css";
import GDSC_Symbol_gray from "../assets/images/GDSC_Symbol_gray.png";
import TLC_large from "../assets/images/TLC_large.png";
import TLC_mid from "../assets/images/TLC_mid.png";

export default function RotatingText() {
  return (
    <div className="flex items-center justify-center">
      <div className="text-[#171717] font-pretendard text-5xl font-normal leading-[100px] ml-56 ">
        <ul className="list-none font-bold">
          <li>Together,</li>
          <li>Learn,</li>
          <li>
            <span class="hl-1">C</span>
            <span class="hl-2">o</span>
            <span class="hl-3">n</span>
            <span class="hl-4">n</span>
            <span class="hl-5">e</span>
            <span class="hl-6">c</span>
            <span class="hl-7">t</span>
          </li>
        </ul>
      </div>

      <div className="relative w-[442px] h-[442px] mr-48 flex justify-center items-center ml-96 flex-shrink-0">
        <img
          className="absolute animate-spin-slow w-[392px] h-[392px]"
          src={TLC_large}
          alt="TLC_large"
        />
        <img
          className="absolute animate-spin-slow w-[244.588px] h-[255.162px]"
          src={TLC_mid}
          alt="TLC_mid"
        />
        <img
          className="absolute w-[85.748px] h-[41.106px]"
          src={GDSC_Symbol_gray}
          alt="GDSC Symbol Gray"
        />
      </div>
    </div>
  );
}
