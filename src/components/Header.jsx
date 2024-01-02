import React from "react";
import GDSC_Symbol from "../assets/images/GDSC_Symbol.png";

export default function Header() {
  return (
    <header className="flex justify-between">
      <div className="flex items-center space-x-3 cursor-pointer pt-7 pl-40">
        <img
          src={GDSC_Symbol}
          alt="GDSC Symbol"
          className="w-11 h-5"
        />
        <span className="text-2xl font-bold noto-sans-kr">GDSC</span>
        <span className="text-base text-gray-400 font-pretendard">Konkuk Univ.</span>
      </div>

      <nav className="flex items-center space-x-24  mt-8 mr-40">
        <ul className="flex space-x-24 list-none">
          <li className="cursor-pointer">Member</li>
          <li className="cursor-pointer">Program</li>
          <li className="cursor-pointer">Recruitment</li>
          <li className="cursor-pointer">Blog</li>
          <li className="cursor-pointer">FAQ</li>
        </ul>
      </nav>
    </header>
  );
}
