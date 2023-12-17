import React from "react";
import keycap from "../assets/images/keycap.png";

export default function AboutUs() {
  return (
    <div className="flex flex-col items-start">
      <span className="mb-1 ml-56 text-2xl font-semibold text-blue-600">About Us</span>
      
      <div className="flex items-center mt-8 ml-56">
        <img
          src={keycap}
          srcSet="img/keycap@2x.png 2x, img/keycap@3x.png 3x"
          alt="Keycap"
          className="mr-4" 
        />

        <div className="ml-28">
          <p>
            <span className="font-bold">GDSC Konkuk Univ</span>
            는 함께 성장하는 것에 목표를 둔 학생 개발자 커뮤니티입니다! 
          </p>
          <p>
            스스로 공부할 수 있는 환경 속에서 서로에게 긍정적인 영향을 주며,
          </p>
          <p className="mb-2">
            <span className="font-bold">같이 나아가는 것</span>
            에 초점을 맞추어 다양한 활동들을 진행하고 있습니다.
          </p>
          <p className="mb-2">
          <span className="font-bold">배움을 통해 성장</span>
          하고 이를 통해 세상에 
          <span className="font-bold">긍정적인 영향력</span>
          을 주기 위해 노력합니다.
          </p>
        </div>
      </div>
    </div>
  );
}
