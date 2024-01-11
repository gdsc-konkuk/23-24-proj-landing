import React from "react";
import Desktop_blank_frame from "../assets/images/Desktop_blank_frame.png";
import GIF_NotionPage from "../assets/NotionPage/GIF_NotionPage.gif";



export default function InGdsc() {
  return (
    <InGdsc>
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
              <video src={GIF_NotionPage} alt="GIF_NotionPage" loop autoPlay muted className="w-[62.25rem] h-[37.55rem] mt-16 mx-auto" style={{ position: "absolute", top: 40, left: 0 }}></video>
            </div>
          </div>

          
        </div>
    </InGdsc>
  );
}
