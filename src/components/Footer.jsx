import React from "react";
import "./Footer.css"; // CSS 스타일시트를 import 합니다.

export default function Footer() {
  return (
    <footer className="footer-container">
      <span className="footer-line"></span>
      <span className="footer-text">
        <p>
          Designed by. Yeowon Kim, Chaerin Kim {"\n"}
          Developed by. Jeongmin Seon, Jimin Lee {"\n"}
          {"\n"}
          @2023-2024 Google Developer Student Clubs Konkuk University. All
          rights reserved.
        </p>
      </span>
    </footer>
  );
}
