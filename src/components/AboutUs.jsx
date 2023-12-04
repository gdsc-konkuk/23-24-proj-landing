import React from "react";
import "./AboutUs.css";
import keycap from "../assets/images/keycap.png";

export default function AboutUs() {
  return (
    <div className="AboutUs">
      <span className="text-AboutUs">Abous Us</span>
      <img
        src={keycap}
        srcSet="img/keycap@2x.png 2x, img/keycap@3x.png 3x"
        alt="Keycap"
        className="keycap"
      />

      <span className="GDSC-Konkuk-Univ-">
        <span className="text-style-1">GDSC Konkuk Univ</span>는 함께 성장하는
        것에 목표를 둔 학생 개발자 커뮤니티입니다! 스스로 공부할 수 있는 환경
        속에서 서로에게 긍정적인 영향을 주며,{" "}
        <span className="text-style-2">같이 나아가는 것</span>에 초점을 맞추어
        다양한 활동들을 진행하고 있습니다.{" "}
        <span className="text-style-3">배움을 통해 성장</span>하고 이를 통해
        세상에 <span className="text-style-4">긍정적인 영향력</span>을 주기 위해
        노력합니다.
      </span>
    </div>
  );
}
