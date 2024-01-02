import React from "react";

//import InGdsc assets
import Video_NotionPage from "../assets/NotionPage/Video_NotionPage.MOV";
import Desktop_blank_frame from "../assets/images/Desktop_blank_frame.png";


export default function Footer() {
  return (
    <footer>

      {/* *********** <InGdsc> Component *********** */}
        <div className="text-center">
          
          <p className="text-6xl font-bold noto-sans-kr">In GDSC</p>
          <p className="mt-6 font-pretendard">"이 모든 도전과 성장을 함께하는"</p>
          <p className="text-zinc-600 font-pretendard"> 다양한 활동을 통해 더 단단한 GDSC Konkuk을 만들어 나가요.</p>
          <div className="mt-10">
            <p>
              <span className="text-base font-pretendard text-red-500 w-24 h-8 top-4728 left-568 rounded-[1.234375rem] border border-solid ">#Try</span>
              <span className="text-base font-pretendard text-blue-500 ml-2 w-24 h-8 top-4728 left-568 rounded-[1.234375rem] border border-solid">#Grow</span>
              <span className="text-base font-pretendard text-yellow-500 ml-2 w-24 h-8 top-4728 left-568 rounded-[1.234375rem] border border-solid">#In</span>
            </p>
            <p className="mt-6"> 
              <span className="text-base font-pretendard ml-2 w-24 h-8 top-4728 left-568 rounded-[1.234375rem] border border-solid">#GDSC</span>
              <span className="text-base font-pretendard text-green-500 ml-2 w-24 h-8 top-4728 left-568 rounded-[1.234375rem] border border-solid">#Konkuk</span>
            </p>
          </div>

          <div className="flex justify-center items-center">
            <div style={{ position: "relative" }}>
              <img src={Desktop_blank_frame} alt="Desktop_blank_frame" className="w-[62.25rem] h-[37.55rem] mt-16 mx-auto" />
              <video src={Video_NotionPage} alt="Video_NotionPage" loop autoPlay muted className="w-[62.25rem] h-[37.55rem] mt-16 mx-auto" style={{ position: "absolute", top: 40, left: 0 }}></video>
            </div>
          </div>

          
        </div>
      {/* *********** <InGdsc> Component *********** */}





      {/* *********** <Footer> Component *********** */}

      <div className="relative">
        <div className="absolute border-t border-dashed border-gray-900 w-full h-px bottom-56 md:bottom-56"></div>
        <div className="absolute text-gray-900 font-light leading-6 tracking-wider whitespace-pre-line bottom-0 md:bottom-28 ml-32 w-full">
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
      </div>
     {/* *********** <Footer> Component *********** */}

    </footer>
  );
}
