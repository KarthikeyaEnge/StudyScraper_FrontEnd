import React from "react";
import {
  FaPlusCircle,
  FaTrash,
  FaFileImage,
  FaRegPaperPlane,
} from "react-icons/fa";
import { useState } from "react";

const Scrape = () => {
  const [file, setFile] = useState("");
  const [error, setError] = useState(null);

  const handleUpload = (event) => {
    const extname = event.target.files[0].name.split(".")[1];

    if (extname === "jpg" || extname === "jpeg" || extname === "png") {
      setError(null);
      const fname = event.target.files[0].name;
      console.log(fname);
      if (fname) setFile(fname);
    } else {
      setError("Invalid File");
      setFile("");
    }
  };

  const handleDelete = async () => {
    setFile("");
  };

  return (
    <main className=" flex flex-col min-h-screen bg-slate-800 gap-4 py-3 items-center">
      <section className="flex flex-col items-center text-sky-700 text-3xl bg-slate-900  w-80 h-auto py-8 px-2 text-center rounded-2xl border-dashed border-4 border-sky-700 my-7">
        <button className="flex flex-row justify-center items-center flex-nowrap  mx-2 my-12 p-2 text-xl  w-24  max-h-9 bg-sky-300  rounded-sm text-slate-900 hover:scale-150 hover:-translate-y-4 transition-all hover:shadow-2xl hover:shadow-sky-500">
          <input
            type="file"
            onChange={handleUpload}
            className="-m-100 opacity-0 "
          />
          <FaPlusCircle className="flex-shrink-0" />
          Import
        </button>
        <p>Add Your Scan</p>
        <p>Accepted-Format: JPEG, PNG, JPG</p>

        <h3 className="text-lg text-red-600">{error}</h3>

        <section className="text-xl text-sky-600 mt-6">
          {file[0] != null ? (
            <section className=" text-slate-800 flex flex-row justify-between items-center bg-sky-500 w-auto gap-3 p-3 rounded-xl">
              <FaFileImage />
              <p>{file.length > 8 ? file.substring(0, 5) + "..." : file}</p>
              <FaTrash
                type="button"
                onClick={handleDelete}
                className=" ml-14"
              />
            </section>
          ) : (
            <p>Import File To See.</p>
          )}
        </section>
      </section>
      <button className="flex flex-row  h-auto w-auto p-3 m-5 bg-sky-700 hover:bg-sky-500 hover:-translate-y-3 transition-all delay-200 text-slate-900 text-xl justify-center items-center rounded-xl active:shadow-xl active:shadow-sky-600 animate-bounce hover:animate-none shadow-lg shadow-slate-900">
        <h1>GO</h1>
        <FaRegPaperPlane className=" ml-4" />
      </button>
    </main>
  );
};

export default Scrape;
