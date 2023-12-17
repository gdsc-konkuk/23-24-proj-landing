import React from "react";

export default function Footer() {
  return (
    <footer>
      <div className="absolute border-t border-dashed border-gray-900 w-full h-px bottom-56"></div>
      <div className="absolute text-gray-900 font-light leading-6 tracking-wider whitespace-pre-line bottom-28 ml-32 w-full">
        <p >
          <p>
            Designed by. Yeowon Kim, Chaerin Kim
          </p>
          <p>
           Developed by. Jeongmin Seon, Jimin Lee
          </p>
          <p>
            @2023-2024 Google Developer Student Clubs Konkuk University. All
           rights reserved.
          </p>
        </p>
      </div>
    </footer>
  );
}
