import React from "react";

//import InGdsc assets
import Desktop_blank_frame from "../assets/images/Desktop_blank_frame.png";

export default function Footer() {
  return (
    <footer>
      <div className="border-t border-dashed border-gray-900 w-full h-px bottom-56 md:bottom-56"></div>
      <div className="text-gray-900 font-light leading-6 tracking-wider whitespace-pre-line bottom-0 md:bottom-28 ml-32 w-full">
        <p className="py-10">
          <p>Designed by. Yeowon Kim, Chaerin Kim</p>
          <p>Developed by. Jeongmin Seon, Jimin Lee</p>
          <p className="mt-10">
            @2023-2024 Google Developer Student Clubs Konkuk University. All
            rights reserved.
          </p>
        </p>
      </div>
    </footer>
  );
}
