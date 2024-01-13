import React from "react";

export default function InGdsc() {
  return (
    <>
      <div className="text-center">
        <p className="text-6xl font-bold noto-sans-kr">In GDSC</p>
        <p className="mt-6 font-pretendard">"이 모든 도전과 성장을 함께하는"</p>
        <p className="text-zinc-600 font-pretendard">
          {" "}
          다양한 활동을 통해 더 단단한 GDSC Konkuk을 만들어 나가요.
        </p>
        <div className="mt-10 space-y-2">
          <div className="flex justify-center items-center space-x-2">
            <div className="w-24 h-8 rounded-[1.234375rem] border border-solid">
              <span className="text-base font-pretendard text-red-500 w-24 h-8 font-bold ">
                #Try
              </span>
            </div>
            <div className="w-24 h-8 rounded-[1.234375rem] border border-solid">
              <span className="text-base font-pretendard text-blue-500 w-24 h-8 font-bold ">
                #Grow
              </span>
            </div>
            <div className="w-24 h-8 rounded-[1.234375rem] border border-solid">
              <span className="text-base font-pretendard text-yellow-500 w-24 h-8 font-bold ">
                #In
              </span>
            </div>
          </div>
          <div className="flex justify-center items-center space-x-2">
            <div className="w-24 h-8 rounded-[1.234375rem] border border-solid">
              <span className="text-base font-pretendard w-24 h-8 font-bold ">
                #GDSC
              </span>
            </div>
            <div className="w-24 h-8 rounded-[1.234375rem] border border-solid">
              <span className="text-base font-pretendard text-green-500 w-24 h-8 font-bold ">
                #KonKuk
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
