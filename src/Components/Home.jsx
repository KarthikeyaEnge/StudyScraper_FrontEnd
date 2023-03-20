import React from "react";

const Home = () => {
  return (
    <main className=" min-h-screen bg-slate-800">
      <div className="flex flex-col h-screen items-center justify-center flex-nowrap bgimg ">
        <h1 className="xl:text-7xl lg:text-6xl text-4xl bg-gradient-to-r from-blue-500 via-indigo-500 to-sky-500 bg-clip-text text-transparent font-michroma mb-10 -mt-5 mx-2">
          STUDY SCRAPPER
        </h1>

        <div class="text-center w-full">
          <h1 className="my-1 lg:text-3xl text-2xl text-sky-500 font-bold leading-tight">
            Running Short For Exam Preparation?
          </h1>
          <h1 className="my-1 lg:text-3xl text-2xl text-sky-500 font-bold leading-tight">
            {" "}
            Don't Worry We Got You
          </h1>
          <p className="mb-8 text-lg text-slate-400">
            Our Scraper Converts Your Syllabus Copy Into An Elegant , Easy
            Understandable Set Of Curated Videos
          </p>
          <div className="flex justify-center gap-5">
            <button className="hover:bg-sky-500 transition-all delay-200 bg-white text-gray-800 font-bold rounded-full  py-4 px-8">
              Let's Do This!
            </button>
            <button className="hover:bg-sky-500 transition-all delay-200 bg-white text-gray-800 font-bold rounded-full  py-4 px-8">
              Instructions
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
