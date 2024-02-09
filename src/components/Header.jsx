import React from "react";
import GDSC_Symbol from "../assets/images/GDSC_Symbol.png";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="flex fixed justify-between min-w-[900px] backdrop-blur-md z-50 w-full px-10 py-6">
      <Link to="/" className="flex gap-3 items-center">
        <img
          src={GDSC_Symbol}
          alt="GDSC Symbol"
          className="w-11 h-5  cursor-pointer"
        />
        <span className="text-2xl font-bold">GDSC</span>
        <span className="text-base text-gray-400 ">Konkuk Univ.</span>
      </Link>

      <nav className="flex items-center gap-x-16">
        <Link to="/" className="cursor-pointer text-lg font-medium">
          Member
        </Link>
        <Link to="/" className="cursor-pointer text-lg font-medium">
          Program
        </Link>
        <Link to="/" className="cursor-pointer text-lg font-medium">
          Recruitment
        </Link>
        <Link to="/" className="cursor-pointer text-lg font-medium">
          Blog
        </Link>
        <Link to="/" className="cursor-pointer text-lg font-medium">
          FAQ
        </Link>
      </nav>
    </header>
  );
}
