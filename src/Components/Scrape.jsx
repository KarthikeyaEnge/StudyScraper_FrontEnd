import React from "react";
import { FaPlusCircle, FaTrash, FaDotCircle } from "react-icons/fa";
import { useState } from "react";

const Scrape = () => {
  const [file, setFile] = useState("");
  const [error, setError] = useState(null);

  const handleUpload = (event) => {
    const count = file.length >= 1 ? file.length + 1 : 1;
    const extname = event.target.files[0].name.split(".")[1];

    if (extname === "jpg" || extname === "jpeg" || extname === "png") {
      setError(null);
      const fname = event.target.files[0].name;
      console.log(fname);
      if (fname) setFile([fname]);
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
      </section>

      <h3 className="text-lg text-red-600">{error}</h3>

      <section className="text-xl text-sky-600">
        {file[0] != null ? (
          <section className=" text-slate-800 flex flex-row justify-between items-center bg-sky-500 w-auto gap-3 p-3 rounded-xl">
            <FaDotCircle />
            <p>{file[0]}</p>
            <FaTrash type="button" onClick={handleDelete} />
          </section>
        ) : (
          <p>Import File To See.</p>
        )}
      </section>
    </main>
  );
};

export default Scrape;
