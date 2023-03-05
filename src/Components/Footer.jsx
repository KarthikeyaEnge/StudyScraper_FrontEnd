import React from "react";

const Footer = () => {
  return (
    <footer className=" text-center text-2xl text-sky-300 min-w-full h-auto p-5 bg-slate-800 border-t-2 border-sky-600">
      &copy; studyscrapper {new Date().getFullYear()}
    </footer>
  );
};

export default Footer;
