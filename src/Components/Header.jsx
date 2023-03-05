import React from "react";
import { FaPlay } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaUser } from "react-icons/fa";

const Header = () => {
  return (
    <header className="flex flex-row justify-between items-center bg-sky-500 shadow-2xl  min-w-full h-20 p-2 border-b-8 border-sky-500  shadow-black">
      <FaPlay className=" text-6xl text-slate-800  rounded-3xl p-1 bg-transparent border-slate-800 border-4 mx-4" />

      <nav className=" flex flex-row justify-between items-center mx-2 text-xl gap-3 text-slate-300">
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
          to="/signin"
          className="hover:text-slate-800    transition-all mx-4 font-bold"
        >
          <FaUser />
        </Link>
      </nav>
    </header>
  );
};

export default Header;
