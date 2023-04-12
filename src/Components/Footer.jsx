import React from "react";

const Footer = () => {
  return (
    <footer className=" text-center text-2xl text-slate-900 min-w-full h-auto p-5  bg-footer">
      &copy; studyscrapper {new Date().getFullYear()}
    </footer>
  );
};

export default Footer;
