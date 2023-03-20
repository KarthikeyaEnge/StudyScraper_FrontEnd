import React from "react";
import heroImg from "../assets/maxresdefault.jpg"
const Home = () => {
  return <main className=" min-h-screen bg-slate-800">
      <div className="container flex  flex-col h-screen items-center justify-center flex-nowrap bgImg ">
       
       <div class="text-center w-full"> 
         <h1 className="my-1 text-3xl text-zinc-100 font-bold leading-tight">
           Running Short For Exam Preparation? 
         </h1>
         <h1 className="my-1 text-3xl text-zinc-100 font-bold leading-tight"> Don't Worry We Got You</h1>
         <p className="text-2xl mb-8">
           Our Scraper Converts Your Syllabus Copy Into An Elegant , Easy Understandable Set Of Curated Videos
         </p>
         <div className="flex justify-center mx-auto">
           <button
             className="hover:underline bg-white text-gray-800 font-bold rounded-full  py-4 px-8">
             Let's Do This!
           </button>
           <button
             className="ml-4 hover:underline bg-white text-gray-800 font-bold rounded-full  py-4 px-8">
             Instructions
           </button>
         </div>
       </div>
     </div>

          </main>;
};

export default Home;
