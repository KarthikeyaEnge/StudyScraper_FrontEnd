import React from "react";
import { useState, useEffect, useRef } from "react";
import {
  FaYoutube,
  FaTh,
  FaRegPaperPlane,
  FaTrash,
  FaPlusSquare,
} from "react-icons/fa";
import { Navigate } from "react-router-dom";
import Invalid from "./Invalid";
import YouTube from "react-youtube";

let listx = {
  concepts: [
    { id: 26, concept: " Encapsulation", checked: true },
    { id: 27, concept: " Classes and Objects", checked: true },
    { id: 28, concept: " Classes", checked: true },
    { id: 29, concept: " Class structure", checked: true },
    { id: 30, concept: " class components", checked: true },
    { id: 31, concept: " Objects", checked: true },
    { id: 32, concept: " Object declaration", checked: true },
    { id: 33, concept: " Reference variables", checked: true },
    { id: 34, concept: " Constructors", checked: true },
    { id: 35, concept: " default Constructor", checked: true },
    { id: 36, concept: " Parameterized Constructors", checked: true },
    { id: 37, concept: " Constructor overloading", checked: true },
    { id: 38, concept: " this keyword and its uses", checked: true },
    { id: 39, concept: " arrays concept", checked: true },
    { id: 40, concept: " static modifier", checked: true },
    { id: 41, concept: " access modifiers", checked: true },
    { id: 42, concept: " Wrapper classes", checked: true },
    { id: 43, concept: " Methods", checked: true },
    { id: 46, concept: " getters and setters", checked: true },
    { id: 47, concept: " Method Overloading", checked: true },
    { id: 48, concept: " Command-line arguments", checked: true },
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

const Results = ({ list = null }) => {
  const [shrink, setShrink] = useState("none");
  const [search, setSearch] = useState("");
  const [results, setResults] = useState([]);
  const extraadd = useRef("");

  useEffect(() => {
    const ress = list
      ? list.concepts.filter((item) => item.concept.includes(search))
      : null;
    setResults(ress);
  }, [, search]);

  const handleshrink = () => {
    shrink === "none" ? setShrink("block") : setShrink("none");
    document.getElementById("search_res").style.display = shrink;
  };

  const handlecheck = (id) => {
    const otherele = results.filter((item) => item.id !== id);
    const ele = results.filter((item) => item.id === id);

    ele[0].checked = !ele[0].checked;
    setResults([...otherele, ele[0]]);
  };

  const handlecheckdelete = (id) => {
    const otherele = results.filter((items) => items.id !== id);
    setResults([...otherele]);
  };

  const handleAddextra = () => {
    const extraobj = {
      id: results.length + 1,
      concept: extraadd.current.value,
      checked: true,
    };

    extraadd.current.value = "";
    setResults([extraobj, ...results]);
  };

  const vopts = {
    height: "160",
    width: "320",
  };

  return list ? (
    <main className=" min-h-screen lg:grid lg:grid-cols-4 bg-slate-800">
      <section className="lg:max-h-screen bg-slate-900 lg:col-span-1 lg:overflow-y-scroll  lg:overflow-x-hidden text-center py-1 items-center flex flex-col scroll_bar">
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

          <div className="m-1 w-full flex flex-nowrap justify-evenly items-center">
            <input
              type="text"
              placeholder="Add items"
              className="outline-none border-x-0 border-b-2 bg-transparent text-xl text-sky-600 border-sky-500"
              ref={extraadd}
            />
            <FaPlusSquare
              className="flex-shrink-0 bg-sky-500 text-xl"
              onClick={handleAddextra}
            />
          </div>
          <ul>
            {results.map((e) => (
              <li
                key={e.id}
                className="text-slate-900 bg-sky-600 p-1 my-2 mx-4 shadow-md shadow-black rounded-lg flex flex-row flex-nowrap justify-between items-center"
              >
                <input
                  type="checkbox"
                  checked={e.checked}
                  className="form-checkbox h-5 w-5"
                  onClick={() => handlecheck(e.id)}
                />
                {e.concept}
                <FaTrash
                  type="button"
                  onClick={() => handlecheckdelete(e.id)}
                />
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
  ) : (
    <Navigate to="/invalid" />
  );
};

export default Results;
