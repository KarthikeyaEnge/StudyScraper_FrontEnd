import React from "react";
import { useState, useEffect } from "react";
import { FaYoutube, FaTh, FaRegPaperPlane, FaSearch } from "react-icons/fa";
import YouTube from "react-youtube";

let list = {
  concepts: [
    { id: 26, concept: " Encapsulation" },
    { id: 27, concept: " Classes and Objects" },
    { id: 28, concept: " Classes" },
    { id: 29, concept: " Class structure" },
    { id: 30, concept: " class components" },
    { id: 31, concept: " Objects" },
    { id: 32, concept: " Object declaration" },
    { id: 33, concept: " Reference variables" },
    { id: 34, concept: " Constructors" },
    { id: 35, concept: " default Constructor" },
    { id: 36, concept: " Parameterized Constructors" },
    { id: 37, concept: " Constructor overloading" },
    { id: 38, concept: " this keyword and its uses" },
    { id: 39, concept: " arrays concept" },
    { id: 40, concept: " static modifier" },
    { id: 41, concept: " access modifiers" },
    { id: 42, concept: " Wrapper classes" },
    { id: 43, concept: " Methods" },
    { id: 46, concept: " getters and setters" },
    { id: 47, concept: " Method Overloading" },
    { id: 48, concept: " Command-line arguments" },
  ],
};

const vidlist = [
  { id: "2-crBg6wpp0", q: "React" },
  { id: "rfscVS0vtbw", q: "python" },
  { id: "8mAITcNt710", q: "cs" },
  { id: "HXV3zeQKqGY", q: "sql" },
  { id: "PkZNo7MFNFg", q: "Js" },
  { id: "nVdteH89iQI", q: "Objects" },
];

const Results = () => {
  const [shrink, setShrink] = useState("none");
  const [search, setSearch] = useState("");
  const [results, setResults] = useState([]);

  useEffect(() => {
    const ress = list.concepts.filter((item) => item.concept.includes(search));
    setResults(ress);
  }, [, search]);

  const handleshrink = () => {
    shrink === "none" ? setShrink("block") : setShrink("none");
    document.getElementById("search_res").style.display = shrink;
  };

  const vopts = {
    height: "160",
    width: "320",
  };

  return (
    <main className=" min-h-screen lg:grid lg:grid-cols-4 bg-slate-800">
      <section className="lg:max-h-screen bg-slate-900 lg:col-span-1 lg:overflow-y-scroll  text-center py-1 items-center flex flex-col scroll_bar">
        <div className="flex flex-nowrap flex-row w-3/4 justify-between items-center my-3">
          <h3 className="text-lg text-sky-400 font-bold">Results</h3>
          <button
            className=" bg-sky-500 p-1 rounded-md shadow-md shadow-black lg:hidden"
            onClick={handleshrink}
          >
            <FaTh className="text-2xl flex-shrink-0 text-slate-900" />
          </button>
        </div>

        <div className="w-full" id="search_res">
          <input
            type="text"
            name=""
            id=""
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="🔎search"
            className="bg-slate-900 ring-1 ring-sky-400 text-lg p-1 text-white rounded-md focus:outline-none"
          />
          <ul>
            {results.map((e) => (
              <li
                key={e.id}
                className="text-slate-900 bg-sky-600 p-1 my-2 mx-4 shadow-md shadow-black rounded-lg"
              >
                {e.concept}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="col-span-3">
        <nav className="bg-black flex flex-row flex-wrap justify-evenly px-4 py-2 text-lg text-sky-400 shadow-md shadow-black rounded-md m-1  items-center">
          <FaYoutube className=" text-sky-500 flex-shrink-0 text-4xl m-0" />
          <input
            type="text"
            name=""
            id=""
            placeholder="Channel name"
            className=" bg-transparent border-b-sky-500 border-x-0 border-t-0 border-b-2 w-80 ring-0  default:ring-0 p-1 focus:outline-none focus:ring-0 placeholder:text-sky-900"
          />
          <div className="m-1">
            <input type="radio" name="opt" id="" /> <label>Most Rated</label>
          </div>
          <div className="m-1">
            {" "}
            <input type="radio" name="opt" id="" /> <label>Most Watched</label>
          </div>

          <button className="flex flex-row  h-auto w-auto px-2 m-1 bg-sky-700 hover:bg-sky-500 transition-all delay-200 text-slate-900 text-sm justify-center items-center rounded-full active:shadow-md active:shadow-sky-600  shadow-slate-900">
            <h1>Play</h1>
            <FaRegPaperPlane className=" ml-4" />
          </button>
        </nav>

        <section className=" min-h-full">
          <ul className="flex flex-row flex-wrap items-center justify-center">
            {vidlist.map((item) => {
              return (
                <li
                  key={item.id}
                  className="m-1 flex-shrink-0 flex flex-col flex-nowrap justify-between items-center"
                >
                  <h1 className="text-xl text-sky-500 font-bold">{item.q}</h1>
                  <YouTube
                    videoId={item.id}
                    opts={vopts}
                    className="rounded-xl border-2 border-sky-500 overflow-hidden"
                  />
                </li>
              );
            })}
          </ul>
        </section>
      </section>
    </main>
  );
};

export default Results;
