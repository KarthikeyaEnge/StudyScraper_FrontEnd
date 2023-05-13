import React from "react";
import { FaPlay, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="flex flex-row justify-between items-center bg-gradient-to-r from-blue-500 to-sky-500   min-w-full h-20 p-2  sticky top-0 z-50">
      <Link to="/">
        <FaPlay className=" text-6xl text-slate-800  rounded-3xl p-1 bg-transparent border-slate-800 border-4 mx-4" />
      </Link>

      <nav className=" flex flex-row justify-between items-center mx-1 text-xl gap-3 text-slate-300">
        <Link
          to="/"
          className="hover:text-slate-800    transition-all mx-4 font-bold"
        >
          Home
        </Link>
        <Link
          to="/scrape"
          className="hover:text-slate-800    transition-all mx-4 font-bold"
        >
          Scrape
        </Link>
        <Link
          to="/login"
          className="hover:text-slate-800    transition-all mx-4 font-bold"
        >
          <FaUser />
        </Link>
      </nav>
    </header>
  );
};

export default Header;
