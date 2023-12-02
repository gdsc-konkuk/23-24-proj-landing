import React from "react";
import GDSC_Symbol from "./img/GDSC_Symbol.png";
import "./Header.css";

const Header = () => {
  return (
    <header className="header-container">
      <div className="logo-container">
      <img src={GDSC_Symbol} alt="GDSC Symbol" style={{ marginLeft: "120px", marginTop: "29px", width: "45px", height: "21px", flexShrink: 0 }} />
        <div className="header-gdsc">
          GDSC 
        </div>

        <div className="header-konkuk-univ">
          Konkuk Univ
        </div>
      </div>

      <nav className="nav-bar">
        <ul>
          <li>Member</li>
          <li>Program</li>
          <li>Recruitment</li>
          <li>Blog</li>
          <li>FAQ</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
