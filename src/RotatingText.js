import React from "react";
import "./RotatingText.css";  // CSS 스타일시트를 import 합니다.
import GDSC_Symbol_gray from "./img/GDSC_Symbol_gray.png";
import TLC_large from "./img/TLC_large.png";
import TLC_mid from "./img/TLC_mid.png";

const RotatingText = () => {
  return (
    <div className="RotatingText">
      <div className="text">
      <ul>
        <li>
          Together,
        </li>
        <li>
          Learn,
        </li>
        <li>
          Connect
        </li>
      </ul>
      </div>

      <div className="Rotation">
        <img className="large" src={TLC_large} alt="TLC_large" />
        <img className="mid" src={TLC_mid} alt="TLC_mid" />
        <img className="gray" src={GDSC_Symbol_gray} alt="GDSC Symbol Gray" />
      </div>
    </div>
  );
};

export default RotatingText;
