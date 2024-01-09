import React from "react";
import GDSC_Symbol from "../assets/images/GDSC_Symbol.png";

export default function Header() {
  return (
    <header className="header-container">
      <div className="logo-container">
        <img
          src={GDSC_Symbol}
          alt="GDSC Symbol"
          style={{
            marginLeft: "120px",
            marginTop: "29px",
            width: "45px",
            height: "21px",
            flexShrink: 0,
          }}
        />
        <span className="header-gdsc">GDSC</span>

        <span className="header-konkuk-univ">Konkuk Univ.</span>
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
}
